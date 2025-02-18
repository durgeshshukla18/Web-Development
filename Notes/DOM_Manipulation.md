
### document.getElementById :-
This method is used to get the element with the specified id. It returns the element with the id attribute matching the specified value. If no element with the specified id exists, it returns null.

- `getAttribute :-`
This method is used to get the value of the attribute with the specified name. It returns the value of the attribute, or null if the attribute does not exist.

- `setAttribute :-`
This method is used to set the value of the attribute with the specified name. It sets the value of the attribute, or creates a new attribute if it does not exist.


### textContent Vs innerHTML Vs innerText :-
- `textContent :-`
This property returns the text content of the specified element and its descendants. It returns a string containing the text of all the element's descendants. If the element itself contains no text, an empty string is returned. If the element contains only white space, a string containing the white space is returned. 

- `innerHTML :-`
This property sets or gets the HTML content of an element. It returns the HTML content of the element , as a string. If the element contains no HTML content, an empty string is returned. If the element contains only white space, a string containing the white space is returned.

- `innerText :-`
This property returns the text content of the specified element and its descendants. It returns a string containing the text of all the element's descendants. If the element itself contains no text, an empty string is returned. If the element contains only white space, a string containing the white space is returned.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="bg-black">
    <div>
      <h1 id="title" class="heading">Learning DOM <span style="display: none;">Test text</span></h1>
    </div>
      
  </body>
</html>

```
```JS
title.innerText // Learning DOM
title.textContent // Learning DOM Test text
title.innerHTML // <h1 id="title" class="heading">Learning DOM <span style="display: none;">Test text</span></h1>
```
### document.querySelector :-
This method returns the first element that matches the specified selectors. It returns the first element that matches the specified selectors, or null if no elements match. If the specified selectors match more than one element, it returns the first one in the document order. If the specified selectors match no elements, it returns null.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="bg-black">
    <div>
      <h1 id="title" class="heading">Learning DOM <span style="display: none;">Test text</span></h1>
      <h1>Heading 2</h1>
      <h1>Heading 3</h1>
    </div>
      
  </body>
</html>

```
```JS
document.querySelector('h1') //returns the first h1 element i.e; <h1 id="title" class="heading">Learning DOM <span style="display: none ;">Test text</span></h1>
```

### document.querySelectorAll :-
This method returns a NodeList of elements that match the specified selectors. It returns a NodeList of elements that match the specified selectors, or an empty NodeList if no elements match. If the specified selectors match more than one element, it returns a NodeList containing all of them in the document order. If the specified selectors match no elements, it returns an empty NodeList. 
```HTML
<!DOCTYPE html>
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="bg-black">
    <div>
      <h1 id="title" class="heading">Learning DOM <span style="display: none;">Test text</span></h1>
      <h1>Heading 2</h1>
      <h1>Heading 3</h1>
      <h1>Heading 4</h1>

    </div>
      
  </body>
</html>

```
```JS
document.querySelectorAll('h1') //returns a NodeList of all h1 elements i.e; NodeList(4) [h1#title.heading, h1, h1, h1] 

```

### document.querySelector vs document.querySelectorAll -
|document.querySelector|document.querySelectorAll|
|------------------------|---------------------------|
| Returns a single element | Returns a NodeList of elements |
| Returns null if no element matches | Returns an empty NodeList if no elements match |
| Returns the first element that matches the selector | Returns all elements that match the selector |

### document.getElementByClass :-
This method returns the first element that matches the specified class name. It returns the first element that matches the specified class name, or null if no element matches. If the specified class name matches more than one element, it returns the first one in the document order. If the specified class name matches no elements, it returns null. 
