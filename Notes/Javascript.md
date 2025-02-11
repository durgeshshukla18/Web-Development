# JavaScript
----------------
## Bootstrap Contents
1. Alert :-
- alert
- alert-{contextual} : primary, success, danger, info, warning etc.
- alert-dismissible
- alert-heading
- alert-link

### jQuery Attributes
Bootstrap Components use jQuery attributes to configure and handle functionality.

Bootstrap5 version defines the attributes using "data-bs-{}"

Bootstrap Upto4 version defines the attribute using "data-{}".

Bootstrap jQuery attributes are of various types-
1. data-bs-target
2. data-bs-toggle
3. data-bs-dismiss
4. data-bs-slide
5. data-bs-ride etc.

To close any component in bootstrap you can attacg the attribute called "data-bs=dismiss" to any clickable element like[button, links]
`<button class>`



### classes:-
1. .card
2. .card-header
3. .card-body
4. .card-footer
5. .card-title
6. .card-subtitle
7. .card-img-top

### pagination :-
1. .pagination
2. .page-item
3. .page-link
4. .page-text
5. .active
6. disabled

### Modal :-
We can control the position using the classes.
- .modal-dialog-centered
- .modal-fullscreen
- .modal-dialog scrollable

#### Syntax:-
```
<div class="modal-dialog modal-dialog-centered">
<div class="modal-dialog modal-fullscreen">
<div class="modal-dialog modal-dialog-scrollable">
```

### Spinner :-
It is used to show status of any task performed in a page.

=> Classes
- .spinner-border
- .spinner-border-sm|lg
- .spinner-grow
- .spinner-grow-sm|lg

### Collapse :-
It is used to show/hide content dynamically.

=> Classes
- .collapse
- .show

=> attributes
- .data-bs-target(specify the id of the element we target we target)
- .data-bs-toggle(specify the component)
