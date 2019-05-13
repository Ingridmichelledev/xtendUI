/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// https://github.com/gatsbyjs/gatsby/issues/1526
// replace inline css with links

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  if (process.env.NODE_ENV !== 'production')
    return;

  let hc = getHeadComponents();
  hc.forEach(el => {
    if (el.type === 'style') {
      el.type = 'link';
      el.props['href'] = el.props['data-href'];
      el.props['rel'] = 'stylesheet';
      el.props['type'] = 'text/css';

      delete el.props['data-href'];
      delete el.props['dangerouslySetInnerHTML'];
    }
  })
}
