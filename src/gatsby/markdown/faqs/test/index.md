---
type: "Faqs"
parent: "Test"
title: "Test"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Test"]
---

##Markdown

Lorem ipsum `dolor sit` amet, *consectetur* **adipiscing** elit. Nam in [laoreet tellus](/core/group/button), nec commodo massa. Aenean ut ex at ex pellentesque efficitur.

Maecenas pulvinar mauris eget pharetra elementum. Sed sit amet ultrices metus, vitae cursus metus. Proin tristique finibus pretium. Morbi sit amet magna faucibus, luctus enim tempor, dignissim quam. Nam a ornare quam, varius cursus felis. Fusce nunc lacus, iaculis vel cursus non, facilisis id quam.

Sed gravida massa in commodo eleifend. Curabitur ac pellentesque nisl. Nunc ut placerat velit, aliquet faucibus erat. In imperdiet ligula ex, ut vestibulum ipsum fermentum in. Fusce ante ex, molestie at condimentum non, ullamcorper a lorem. Morbi et eros pellentesque, congue sem non, dapibus tellus.

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur. Maecenas pulvinar mauris eget pharetra elementum.

[[notePrimary]]
| With **multiple mode** you **can't** specify targets with **#id**.

<script type="text/plain" class="language-markup">
  <a href="#" class="btn btn--default">
    <!-- content -->
  </a>
  
  <button type="button" class="btn btn--default">
    <!-- content -->
  </button>
</script>

```
$ mkdir -p xtend-library/
$ cp -r node_modules/xtend-library/dist/ xtend-library/
```

```less
// test comment

.test > * {
  @media @min-sm {
    .test();
  }
}

body {
  background: #ff0000;
}
```

```jsx
let self = new Xt.Scroll(document.documentElement, {
});
```

##Tables

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.col-{number}`                           | `.col-6`                      |
| Class responsive        | `.col-{number}--{breakpoint}`              | `.col-6--sm`                   |
| Mixin                   | `.col({number})`                          | `.col(6)`                     |
| Mixin responsive min    | `.col({number}, {breakpoint})`            | `.col(6, sm)`                 |

</div>

##Demo

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="vanilla">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        Inline
      </div>
    </div>
  </div>
</demo>

###Inline

<demo>
  <demovanilla src="inline/demos/test/vanilla" name="test vanilla">
    <div class="gatsby_demo_text">
      test vanilla <strong>strong</strong> <code>code</code>
    </div>
  </demovanilla>
  <demoreact src="inline/demos/test/react" name="test react">
    <div class="gatsby_demo_text">
      test react <strong>strong</strong> <code>code</code>
    </div>
  </demoreact>
</demo>

###Iframe

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/demos/test/vanilla-iframe" data-name="test vanilla frame">
    <div class="gatsby_demo_text">
      test vanilla iframe <strong>strong</strong> <code>code</code>
    </div>
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/demos/test/react-iframe" data-name="test react iframe">
    <div class="gatsby_demo_text">
      test react iframe <strong>strong</strong> <code>code</code>
    </div>
  </div>
</demo>

##Card

<demo>
  <demovanilla src="inline/demos/test/test-card-content">
  </demovanilla>
</demo>

##Overlay

<demo>
  <demovanilla src="inline/demos/test/test-overlay-content">
  </demovanilla>
</demo>

###Slider

<demo>
  <demovanilla src="inline/demos/test/test-slider-content">
  </demovanilla>
</demo>