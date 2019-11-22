---
type: "Components"
badge: "Core"
parent: "Form"
title: "Group"
date: "2000-03-01"
---

##Usage

Use this markup to create a **form group**.

<script type="text/plain" class="language-markup">
  <form>
    <div class="form-group">
      <!-- content -->
    </div>
  </form>
</script>

In css you can use `.form-groups({});` to style all `.form-group:not(.xt-custom)`.

If you want to customize form's group singularly use the class `.form-group.xt-custom`.

[[noteError]]
| Form group must be inside `form` or `.form` to have default styles.

##Size

Classes for assigning size (e.g.: padding or font size).

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.form--{variant}`                        | `.form--small` `.form--medium` `.form--big`     |
| Mixin                   | `.form--{variant}()`                      | `.form--small()` `.form--medium()` `.form--big()`     |

</div>

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.form-group--{variant}`                        | `.form-group--small` `.form-group--medium` `.form-group--big`     |
| Mixin                   | `.form-group--{variant}()`                      | `.form-group--small()` `.form-group--medium()` `.form-group--big()`     |

</div>

<demo>
  <demovanilla src="vanilla/components/form/group-small">
  </demovanilla>
  <demovanilla src="vanilla/components/form/group-medium">
  </demovanilla>
  <demovanilla src="vanilla/components/form/group-big">
  </demovanilla>
</demo>

##Addon

There are several form group options to change the form layout. They aren't just less classes to apply, but they need major markup formatting.

<demo>
  <demovanilla src="vanilla/components/form/special-none">
  </demovanilla>
  <demovanilla src="vanilla/components/form/special-row">
  </demovanilla>
  <demovanilla src="vanilla/components/form/special-horizontal">
  </demovanilla>
  <demovanilla src="vanilla/components/form/special-inline-input" name="inline input">
  </demovanilla>
  <demovanilla src="vanilla/components/form/special-inline">
  </demovanilla>
</demo>