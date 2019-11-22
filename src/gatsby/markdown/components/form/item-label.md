---
type: "Components"
badge: "Core"
parent: "Form"
title: "Item and Label"
date: "2000-04-01"
---

##Usage

Use this markup to create a **form label** and **form item**.

<script type="text/plain" class="language-markup">
  <form>
    <label class="form-label">
      <!-- content -->
    </label>
    <input type="text" class="form-item">
  </form>
</script>

<demo>
  <demovanilla src="vanilla/components/form/item-label" name="item and label">
  </demovanilla>
</demo>

In css you can use `.form-label({});` and `.form-items({});` to style all `.form-label:not(.xt-custom)` and `.form-item:not(.xt-custom)`.

If you want to customize singularly `.form-item` or `.form-label` use the class `.xt-custom`.

[[noteError]]
| Form label and item must be inside [form group](/core/form/group) to have default styles.

##Size

Size is done with **em** so it's relative to the container element. To set `.form-item` and `.form-label` size use [form group](/core/form/group#size).

##Variant

Classes for assigning variant (e.g.: border / background / font colors).

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.form--{variant}`                        | `.form--default` `.form-inverse` |
| Mixin                   | `.form--{variant}()`                      | `.form--default()` `.form-inverse()` |

</div>

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.form-label--{variant}`                  | `.form-label--default` `.form-label--inverse` |
| Mixin                   | `.form-label--{variant}()`                | `.form-label--default()` `.form-label--inverse()` |

</div>

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.form-item--{variant}`                  | `.form-item--default` `.form-item--inverse` |
| Mixin                   | `.form-item--{variant}()`                | `.form-item--default()` `.form-item--inverse()` |

</div>

<demo>
  <demovanilla src="vanilla/components/form/variant-default">
  </demovanilla>
  <demovanilla src="vanilla/components/form/variant-inverse">
  </demovanilla>
</demo>