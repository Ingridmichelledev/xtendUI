"use strict";

var fs = require("fs");
var normalizePath = require("normalize-path");
var rangeParser = require("parse-numeric-range");
var visit = require("unist-util-visit");

// HACK: It would be nice to find a better way to share this utility code.
var highlightCode = require("gatsby-remark-prismjs/highlight-code");

// Language defaults to extension.toLowerCase();
// This map tracks languages that don't match their extension.
var FILE_EXTENSION_TO_LANGUAGE_MAP = {
  js: "jsx",
  md: "markup",
  sh: "bash"
};

var HIGHLIGHT_LINE_REGEX = /\s+(\{\/\*|\/\*|\/\/|<!--|#)\s(highlight-line)\s*(\*\/\}|\*\/|-->)*/;

var getLanguage = function getLanguage(file) {
  if (!file.includes(".")) {
    return "none";
  }

  var extension = file.split(".").pop();

  return FILE_EXTENSION_TO_LANGUAGE_MAP.hasOwnProperty(extension) ? FILE_EXTENSION_TO_LANGUAGE_MAP[extension] : extension.toLowerCase();
};

module.exports = function (_ref) {
  var markdownAST = _ref.markdownAST;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$classPrefix = _ref2.classPrefix,
      classPrefix = _ref2$classPrefix === undefined ? "language-" : _ref2$classPrefix,
      directory = _ref2.directory;

  if (!directory) {
    throw Error("Required option \"directory\" not specified");
  } else if (!fs.existsSync(directory)) {
    throw Error("Invalid directory specified \"" + directory + "\"");
  } else if (!directory.endsWith("/")) {
    directory += "/";
  }

  visit(markdownAST, "inlineCode", function (node) {
    var value = node.value;


    if (value.startsWith("demo:")) {

      // This method removes lines that contain only highlight directives,
      // eg 'highlight-next-line' or 'highlight-range' comments.
      var filterDirectives = function filterDirectives(line, index) {
        if (line.includes("highlight-next-line")) {
          // Although we're highlighting the next line,
          // We can use the current index since we also filter this lines.
          // (Highlight line numbers are 1-based).
          highlightLines.push(index + 1);

          // Strip lines that contain highlight-next-line comments.
          return false;
        } else if (line.includes("highlight-range")) {
          var match = line.match(/highlight-range{([^}]+)}/);
          if (!match) {
            console.warn("Invalid match specified: \"" + line.trim() + "\"");
            return false;
          }
          var range = match[1];

          // Highlight line numbers are 1-based but so are offsets.
          // Remember that the current line (index) will be removed.
          rangeParser.parse(range).forEach(function (offset) {
            highlightLines.push(index + offset);
          });

          // Strip lines that contain highlight-range comments.
          return false;
        }

        return true;
      };

      // Track the number of lines we've filtered,
      // So we can adjust the highlighted index accordingly.


      var file = value.substr(5);
      var path = normalizePath("" + directory + file);

      if (!fs.existsSync(path)) {
        throw Error("Invalid snippet specified; no such file \"" + path + "\"");
      }var filteredLineOffset = 0;

      // Parse file contents and extract highlight markers:
      // highlight-line, highlight-next-line, highlight-range
      // We support JS, JSX, HTML, CSS, and YAML style comments.
      // Turn them into an Array<number> format as expected by highlightCode().
      // The order if these operations is important!
      // Filtering next-line comments impacts line-numbers for same-line comments.
      var highlightLines = [];
      var code = fs.readFileSync(path, "utf8").split("\n").filter(function (line, index) {
        var returnValue = filterDirectives(line, index - filteredLineOffset);

        if (!returnValue) {
          filteredLineOffset++;
        }

        return returnValue;
      }).map(function (line, index) {
        if (line.includes("highlight-line")) {
          // Mark this line for highlighting.
          // (Highlight line numbers are 1-based).
          highlightLines.push(index + 1);

          // Strip the highlight comment itself.
          return line.replace(HIGHLIGHT_LINE_REGEX, "");
        }

        return line;
      }).join("\n").trim();

      // PrismJS's theme styles are targeting pre[class*="language-"]
      // to apply its styles. We do the same here so that users
      // can apply a PrismJS theme and get the expected, ready-to-use
      // outcome without any additional CSS.
      //
      // @see https://github.com/PrismJS/prism/blob/1d5047df37aacc900f8270b1c6215028f6988eb1/themes/prism.css#L49-L54
      var language = getLanguage(file);

      // Allow users to specify a custom class prefix to avoid breaking
      // line highlights if Prism is required by any other code.
      // This supports custom user styling without causing Prism to
      // re-process our already-highlighted markup.
      // @see https://github.com/gatsbyjs/gatsby/issues/1486
      var className = language.split(" ").map(function (token) {
        return "" + classPrefix + token;
      }).join(" ");

      /*
      // Replace the node with the markup we need to make 100% width highlighted code lines work
      node.type = "html";
      node.value = '<div class="gatsby-demo" data-path="' + path + '"></div>';
      //var shadowRoot = node.getElementsByClassName('gatsby-demo').attachShadow({mode: 'open'});
      //shadowRoot.innerHTML = code;
      */
      // Replace the node with the markup we need to make 100% width highlighted code lines work
      node.type = "html";
      node.value = '<div class="gatsby-demo">' + code + '</div>';
    }
  });

  return markdownAST;
};