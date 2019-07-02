---
path: "/docs/layout/grid/row"
type: "docs"
date: "2019-03-01"
title: "Row"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["200-Layout"]
parent: "Grid"
---

##Usage

Use `.row` to create a column/row layout with flexbox.

<script type="text/plain" class="language-markup">
  <div class="row">
    <!-- content -->
  </div>
</script>

##Space

Flex **automatically** add horizontal and vertical spacing to the contents. You can **specify a different one** with this classes/mixins.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.row-space--{size}`                      | `.row-space--small`           |
| Class responsive        | `.row-space--{size}-{breakpoint}`         | `.row-space--small-sm`        |
| Mixin                   | `.row-space({size})`                      | `.row-space(small)`           |
| Mixin responsive min    | `.row-space({size}, {breakpoint})`        | `.row-space(small, sm)`       |

</div>

<div class="alert">
  <div class="alert_content">
    You can set flex's spaces in the `_variables.less` file.
  </div>
</div>

<demo>
  <div class="demo-inline">
    <div class="demo_item demo_preview" data-name="none">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row row-space--none">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="tiny">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row row-space--tiny">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="small">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row row-space--small">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="medium">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row row-space--medium">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="big">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row row-space--big">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="giant">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row row-space--giant">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
  </div>
</demo>

##Direction

Set children's direction inside the flexbox.

<demo>
  <div class="demo-inline">
    <div class="demo_item demo_preview" data-name="row">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="flex-direction: row">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="row-reverse">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="flex-direction: row-reverse">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="column">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="flex-direction: column">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="column-reverse">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="flex-direction: column-reverse">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
  </div>
</demo>

##Wrap

Set children's wrapping inside the flexbox.

<demo>
  <div class="demo-inline">
    <div class="demo_item demo_preview" data-name="wrap">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="flex-wrap: wrap">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="wrap-reverse">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="flex-wrap: wrap-reverse">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="nowrap">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="flex-wrap: nowrap">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--12 col--8-sm"></div>
          <div class="col--12 col--4-sm"></div>
          <div class="col--auto col--2-sm"></div>
          <div class="col--auto"></div>
          <div class="col--auto col--2-sm col--auto-lg"></div>
        </div>
      </div>
    </div>
  </div>
</demo>

##Justify content

Set children's horizontal alignment inside the flexbox.

<demo>
  <div class="demo-inline">
    <div class="demo_item demo_preview" data-name="start">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="justify-content: flex-start">
          <div class="col--2"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="end">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="justify-content: flex-end">
          <div class="col--2"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="center">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="justify-content: center">
          <div class="col--2"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="between">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="justify-content: space-between">
          <div class="col--2"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="around">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="justify-content: space-around">
          <div class="col--2"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
  </div>
</demo>

##Align items

Set children's vertical alignment inside the flexbox.

<demo>
  <div class="demo-inline">
    <div class="demo_item demo_preview" data-name="start">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-items: flex-start">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="end">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-items: flex-end">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="center">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-items: center">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="baseline">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-items: baseline">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="stretch">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-items: stretch">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
  </div>
</demo>

##Align content

Set children's vertical alignment inside the flexbox.

<demo>
  <div class="demo-inline">
    <div class="demo_item demo_preview" data-name="start">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-content: flex-start">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="end">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-content: flex-end">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="center">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-content: center">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="between">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-content: space-between">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="around">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-content: space-around">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="stretch">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="height: 125px; align-content: stretch">
          <div class="col--4"></div>
          <div class="col--8"></div>
          <div class="col--8"></div>
          <div class="col--4"></div>
        </div>
      </div>
    </div>
  </div>
</demo>

##Align self

Set item's vertical alignment inside the flexbox.
If set to **>auto** computes to the parent's `align-items` value.

<demo>
  <div class="demo-inline">
    <div class="demo_item demo_preview" data-name="start">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row">
          <div class="col--4" style="height: 60px"></div>
          <div class="col--8" style="align-self: flex-start"></div>
          <div class="col--8" style="height: 60px"></div>
          <div class="col--4" style="align-self: flex-start"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="end">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row">
          <div class="col--4" style="height: 60px"></div>
          <div class="col--8" style="align-self: flex-end"></div>
          <div class="col--8" style="height: 60px"></div>
          <div class="col--4" style="align-self: flex-end"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="center">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row">
          <div class="col--4" style="height: 60px"></div>
          <div class="col--8" style="align-self: center"></div>
          <div class="col--8" style="height: 60px"></div>
          <div class="col--4" style="align-self: center"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="baseline">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row">
          <div class="col--4" style="height: 60px"></div>
          <div class="col--8" style="align-self: baseline"></div>
          <div class="col--8" style="height: 60px"></div>
          <div class="col--4" style="align-self: baseline"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="stretch">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row">
          <div class="col--4" style="height: 60px"></div>
          <div class="col--8" style="align-self: stretch"></div>
          <div class="col--8" style="height: 60px"></div>
          <div class="col--4" style="align-self: stretch"></div>
        </div>
      </div>
    </div>
    <div class="demo_item demo_preview" data-name="auto">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row" style="align-items: center">
          <div class="col--4" style="height: 60px"></div>
          <div class="col--8" style="align-self: auto"></div>
          <div class="col--8" style="height: 60px"></div>
          <div class="col--4" style="align-self: auto"></div>
        </div>
      </div>
    </div>
  </div>
</demo>

##Order

Set item's order inside the flexbox.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.order--{number}`                        | `.order--1`                   |
| Class responsive        | `.order--{number}-{breakpoint}`           | `.order--1-sm`                |
| Mixin                   | `.order({number})`                        | `.order(1)`                   |
| Mixin responsive min    | `.order({number}, {breakpoint})`          | `.order(1, sm)`               |

</div>

<div class="alert">
  <div class="alert_content">
    You can set orders in the `_variables.less` file.
  </div>
</div>

<div class="alert alert--primary">
  <div class="alert_content">
    By default orders from `.order--0` to `.order--2` are negative values.
  </div>
</div>

<demo>
  <div class="demo-inline">
    <div class="demo_item demo_preview" data-name="order">
      <div class="demo_source demo_source--from demo-cols" data-lang="language-markup">
        <div class="row">
          <div class="col--4 order--4"></div>
          <div class="col--8 order--5"></div>
          <div class="col--12 col--8-sm order--2-lg"></div>
          <div class="col--12 col--4-sm order--1-lg"></div>
          <div class="col--auto col--2-sm order--3"></div>
          <div class="col--auto order--5"></div>
          <div class="col--auto col--2-sm col--auto-lg order--3"></div>
        </div>
      </div>
    </div>
  </div>
</demo>