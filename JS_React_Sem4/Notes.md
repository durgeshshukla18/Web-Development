--- Class 3 (25/03/2025) -----
---
- Working with iterator called "forEach"

-> It can be used only on Array Objects.

```JS
callbackFunction = (value, index, arr) => {

};
forEach(callbackFunction)
```

<b> 1. document.getElementByClassName() : HTMLCollection[] :-</b>

How to convert HTMLCollection to Array ?<br>
Ans. arrayElements = Array.from(HTMLCollection)

<b> 2. document.getElementsByTagName() : HTMLCollection :-</b>
- Another approach to convert HTMLCollection to Array `[...HTMLCollection]`.

<b> 3. document.getElementsByName : NodeList</b>
While working with NodeList, directly we can use forEach() without conversion

<b> 4. Instead of remembering all these methods, we go for a method called `QuerySelector`(cssSelector) | `QuerySelectorAll`(cssSelector) </b>

querySelector(cssSelector) : Element
querySelectorAll(cssSelector) : NodeList

Que. Why do we need so many methods to target HTML Page using JS, when we can target directly with single method call `querySelectorXXX()` ?

Ans. Older version of JS added methods like <br> 
getElementBYId(), getElementByClassName(),.....

As CSS became popular, to give the direct support of accessing the elemnts using CSS methods like querySelector() and querySelectorAll().

querySelector() | querySelectorAll() | getElementById() ===> Works only for static DOM

getElementByClassName() | getElementByTagName() | getElementByName() ===> Dynamic DOM

### JS Output Techniques :-
1. alert()
2. confirm()
3. document.write() | document.writeln()
4. innerHTML | outerHTML
5. innerText | outerText
6. textContent
7. console.XXXXX() [log(), warn(), error(), info(), debug()]

#### alert(msg) void :-
- It has an ok button
- It returns undefined when user clicksok button | presses 'esc' key
- It is used to just display some message

<b> Limitation :- </b>


#### confirm(msg) -- boolean



#### <b><u>document.write() | document.writeln() :-</b></u>
```
<h1>Hello World !!</h1>
<button onclick="addContent()">Add Content</button>

```

Output :-


#### <b><u>innerHTML Vs outerHTML :-</u></b>
innerHTML : It will add the element as a child to the targeted container|element
outerHTML : It will replace the element with the newly provided one to the tageted container|element

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="deleteRecord()">Delete</button>
    <h1></h1>
    <p></p>

    <script type="text/javascript">
        function deleteRecord(){
            flag = confirm("Are you sure you want to delete this record?");
            if(flag == true){
                // document.querySelector("h1").innerHTML = '<h1 style="color:green;">Record Deleted</h1>';
                document.querySelector("h1").outerHTML = '<h2 style="color:green;">Record Deleted</h2>';

                // document.querySelector("h1").remove(); // This will remove the h1 element from the DOM
                // document.querySelector("h1").innerHTML = ""; // This will clear the content of the h1 element
                // document.querySelector("h1").outerHTML = ""; // This will remove the h1 element and its content from the DOM
            }else{
                // document.querySelector("p").innerHTML = '<h1 style="color:red;">Record Not Deleted</h1>';
                document.querySelector("p").outerHTML = '<h2 style="color:red;">Record Not Deleted</h2>';
            }
        }
    </script>
</body>
</html>
```

#### <b><u>innerText Vs textContent :-</u></b>
Same as innerHTML and outerHTMl but in case of innerText or outerText we can just present only text content not any HTML + styles.



```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="deleteRecord()">Delete</button>
    <h1></h1>
    <p></p>

    <script type="text/javascript">
        function deleteRecord(){
            flag = confirm("Are you sure you want to delete this record?");
            if(flag == true){
                document.querySelector("h1").textContent = 'Record Deleted';

            
            }else{
                document.querySelector("p").innerText = 'Record Not Deleted';
            }
        }
    </script>
</body>
</html>
```

![alt text](image.png)


### JS Input Mechanism :-
1. prompt() :-

- return type -- String.

- if user enters the data and click on ok button : 'data'
- if user doesn't enter but clicks on ok button : ' '
- if user clicks on cancel button or esc button with | without entering the data : null

2. queryString :-
- It is a combination of URL + queryParameters(K, V)
- To collect the




<!----Class 6-->

![alt text](image-1.png)

```JS
var x = 3;

function addTwoNumbers(num){
    var result = num + 3;
    return result;
}

var output = addTwoNumbers(3);
```

![alt text](image-2.png)

## Hoisting :-
var : It supports hoisting.

It is a phenomenon in JavaScript where variables and functions are moved to the top of their scope before the code is executed. They can be used without initialization. If var variable holds function expression | arrow function then such variables can't be used without initialization, if we try it would result in `TypeError`.

1. `var` : 
- It supports hoisting.
- It can be used without initialization.
- It supports hoisting with 'undefined' as the value.
- Redeclaring the same variable is possible.
- It is function scoped.

2. `let` :
- It support hoisting [Variable would be in 'Temporal Dead Zone' : It can be used without initializing] <br> If we try to use variable present in temporal dead zone then it would result in `ReferenceError` : variable cant't be accesse without initialization.
- Redeclaring the same variable is not possible.
- Reassignment of value to a variable is possible.
- It is block scoped.[Can't be used outside the block in which it is declared]
- It support shadowing.



|Feature|var|let|const|
| --- | --- | --- | --- |
|Scope|Function-scope|Block-scoped|Block-Scoped|
|Hoisting|Yes(Initialized as undefined)|Yes(but not initialized)|Yes(But not initialized)|
|Redeclaration|Yes|No|No|
|Reassignment|Yes|Yes|No|
|Temporal Dead Zone|No|Yes|Yes|
|Used in Loops|Not Safe(due to function scope)|Safe|Safe(if not reassigned)|
|Global Object Property|Yes(if declared globally)|No|No|



## Basics of function :-
```JS
var x = 1; // global scope, value of x is 1
a(); // a is a function, it is called, value of x is 1 
b(); // b is a function, it is called, value of x is 1

function a(){
    var x = 2; // local scope, value of x is 2 
    console.log(x); 
}

function b(){
    var x = 3; // local scope, value of x is 3
    console.log(x); 
}

console.log(x); // value of x is 1, as it is in global scope and not affected by a() and b()
```

```JS
var b = 3;
function a(){
    console.log(b); // undefined, as it is in global scope and not initialized yet 
    console.log(this.b);
    console.log(window.b);
    window.b = 100;
}

a();
console.log(b); 
```

![alt text](image-3.png)

## Rules to name a variable :-
1. Must start with a letter, underscore(_) or dollar sign($).
2. _ is used for configurations lot of constructs.<br> _ refers thaa the variables requires further implementation.<br> var productName; // Its functionality is final<br> var _productName; // Representation:It is not yet implemented.
3. Don't use special characters ( like @,#,$,%,^,&,*,(,) ).in the variable name.[Suggested by ECMA -262 standard].
4. Name can be alpha numeric.<br> var product202020;
5. Name is acse sensitive.
6. Name can be max 255 characters long.
7. Avoid using single char and long variable name.
8. Avoid using keywords[Total 51 keywords].
<br>var const; //invalid
<br>var if; //invalid

9. Always use camelCase for name and it should be meaningful.
10. Avoid using same name for different variables.

![alt text](DatatypeJS.png)

## JavaScript Objects Vs JSON :-
JS Object = { K : V }<br>
convert javascrpt object to json = JSON.stringify(obj)

JSON = { "K" : "V" }<br>
convert string representation json to javascript object = JSON.parse(json)

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        let user = {
            name: "John Doe",
            age: 30,
            country: "USA",
            hobbies: ["reading", "gaming"],
            isActive: true,
            address: {
                street: "123 Main St",
                city: "New York",
                zipCode: "10001"
            }
        };
        console.log(user); //mutable

        let jsonUser = JSON.stringify(user);
        console.log(jsonUser); //string

        console.log(typeof jsonUser); //string
        console.log(typeof user); //object

        
    </script>
</head>
<body>
    
</body>
</html>
```

## Number Data Type:-
JavaScript stores all numbers (whether typed by the user or written in code) using IEEE 754 double-precision floating point format (64-bit float).

|Bits|Purpose|
|---|---|
|1 bit|Sign(0=Positive, 1=Negative) |
|11 bits|Exponent (biased by 1023) |
|52 bits|Mantissa (fractional part) |

|Concept|JavaScript|
|---|---|
|Max Safe Integer|2^53 -1 (9007199254740991) |
|Precision Above Limit| Lost|
|Alternative|BigInt|

### To convert the data from string to number:-
We have 3 mechanism.

1. parseInt() | parseFloat()
2. Number()


### Local encide currency :-
|Country|Locale Code|Currency Code|
|---|---|---|
|United States|"en-US"|"USD"|
|Germany|"de-DE"|"EUR"|
|Japan|"ja-JP"|
|India|"en-IN"|"INR"|
|United Kingdom|

### Number() :-


### String in JavaScript :-
1. String in JS can be creted in 3 ways-
- By using single quotes.
- By using double quotes.
- By using backticks.

``` JS
let str1 = "Hello World!"; 
let str2 = 'Hello World!'; // used internally by JS engine
let str3 = `Hello World!`; // used by developers for template literals/binding

console.log(typeof str1, typeof str2, typeof str3); // string string string
console.log(str1, str2, str3); // Hello World! Hello World! Hello World!

```

```JS
let str1 = 'sachin'; // primitive string

let str2 =  new String('dhoni'); // object

console.log(str1.toUpperCase());  

str1.country = 'IND'; // primitive string cannot have properties
console.log(str1); // string primitive

str2.country = 'IND';
console.log(str2); // [String: 'dhoni'] { country: 'IND' }

```
![alt text](image-4.png)

Example 4 :-
```JS
let str1 = 'sachin'; // primitive string

let str2 =  new String("sachin"); // object

console.log(str1 == str2); // true
console.log(str1 === str2); // false

```

### length property :-
```JS
let str1 = 'sachin'; // primitive string

let str2 =  new String("sachin"); // object

console.log(str1.length); // 6
console.log(str2.length); // 6
```

### working with backticks(` `) :-
```JS
function doTask(){
    let userName = prompt("Enter your name: ");
    let userAge = prompt("Enter your age: ");

    document.write('Hello ' + userName + ', you are ' + userAge + ' years old.');
    document.write('<br>');
    document.write("Hello " + userName + ", you are " + userAge + " years old."); // string concatenation
    document.write('<br>');
    document.write(`Hello ${userName}, you are ${userAge} years old.`); // template string/syntax  
}

```

### Binding :-
Process of attaching a variable with its value at runtime is referred as Binding.

`Databinding` : Binded the variable with value. <br>
eg : ${variableName}<br>
```JS
var userName = "Sachin";
document.write(`Hello ${userName}`); // Hello Sachin
document.write(`Hello ${username}`); 
```

`styleBinding` : Process of attachng the style related details in 'Inine' manner to an element is referred as style Binding.<br>
eg : document.getElementById(" ").style.cssAttribute='cssValue';
eg : document.getElementById(" ").style.cssText='cssKey: cssValue';

`classsBinding` : Process of attaching the class associated with style to an element is referred as class Binding.<br>
eg : document.getElementById(" ").className='userDefined|library class';

### What is an Event ?
Anything which happens in the application is referred as an event.
- onClick => when any element is clicked by user
- onChange => when value of any element is changed by user
- onBlur => when any element is lost focus by user
- onLoad => when any element is loaded by browser

### String formatting methods :-
1. bold() : returns the string in bold format
2. italics() : returns the string in italics format
3. fontsize(number) : returns the string in specified font size
4. fontcolor(colorName) : returns the string in specified color
5. toUpperCase() : returns the string in upper case

eg :-
```JS
let str = 'Sachin';
let str1 = str.bold();
let str2 = str1.toUpperCase();
let str3 = str2.fontcolor('red');
document.write(str3);

document.write(str.bold().toUpperCase().fontcolor('red')); // Method Chaining
```

|Reference Error|Syntax Error | Type Error|
|---------------|-------------|----------|
|1. not defined | 1. variable is already declared | 1. assignment to a constant variable |
|2. undefined | |
|3. Can not access without declaration| |

### Methods of String Object :-
1. Length :- returns the length of the string <br>
```JS
let str = "Sachin";
console.log(str.length); // 6
console.log(str.length()); // 6
```

<!-----Class Missed----->

### Methods of string object :-
1. toUpperCase() : returns the string in upper case (String)
2. startsWith(string) : returns true if the string starts with the specified value (Boolean)
3. endsWith(string) : returns true if the string ends with the specified value (Boolean)
4. charAt(number) : returns the character at the specified index (String)
5. charCodeAt(number) : returns the unicode of the character at the specified index (Number)
6. indexOf(string) : returns the index of the first occurrence of the specified value (Number)
7. slice([number], [number]) : returns the characters in a specified range (String)


#### split():-
```JS
let names = 'Mansi, Natansh, Shaadi';
let output = names.split(',');
let outputSec = names.split(',', 2);
console.log(typeof(output), output); // object [ 'Mansi', ' Natansh', ' Shaadi' ]
console.log(typeof(output), outputSec); // object [ 'Mansi', ' Natansh' ]
```

Note:

Corner Cases :-
1. If the separator is not found, an array containing the original string is returned.
2. If the separator is an empty string, the string is split into an array of individual characters
3. If the separator is not a string, it is converted to a string before splitting. If the separator is not found, an empty array is returned.
4. If the separator is a regular expression, the string is split at each match of the regular expression. If the separator is not found, an array containing the original string is returned.

- "".split() : ['']
- "".split('') : []
- 'hello user'.split() : ['hello user']
- 'hello user'.split(undefined) : ['hello user']
- 'hello user'.split(null) : ['hello user']
- 'hello user'.split('',0) : []
- 'P,W,,'.split() : ['P', 'W', '', '']
- 'P,W,,'.split(',') : ['P', 'W', '']

### Note :-
In JS we can use condition statements on methods|properties| while returns 'object|null' <br>
This is possible because  by default JS uses the following condition to process the instruction. <br>
```
if(someout!=null){
    // thuthy case
}else{
    // falsy case
}
```

Eg:-
```
let str=''.someMethod(input); // Object|null
if(str){
    //process for thrith case
}else{
    //process for falsy case
}
```

<!-----Break------>
<!-----Break------>
<!-----Break------>
<!-----Break------>
<!-----Break------>


## NonPrimitive type :-

### Array :- 
1. [Key : Value]<br> key : any type , value : any type <br>
if key is of number type then it is treated as index, if key is of string type then it is treated as string index (property).

2. 


### rest operator :-
The rest operator is a syntax in JS written as three dots (...) used to collect multiple arguments into an array. It is used in function parameters to accept a variable number of arguments.

|Usage Context|Example|What it does|
|-------------|-------|------------|
|Function Params| function fn(...args){}| Collects all arguments into an array called `args` |
|Array Destructuring| [a, b, ...rest] = [1, 2, 3, 4, 5]| Gathers remaining elements as array|
|Object Destructuring| {a, b, ...rest} = obj| Gathers remaining properties as object|

Eg:-
```JS
function myFunction(...args) {
            console.log(args);
            const [first, second, ...rest] = args;
            console.log("First:", first);
            console.log("Second:", second);
            console.log("Rest:", rest);
            console.log("Type of args:", typeof args);
        }

        myFunction();
        myFunction(1, 2, 3, 4, 5);
        myFunction("a", "b", "c", "d", "e");
        myFunction(1, "b", true, null, undefined, { key: "value" });
        myFunction(...[1, 2, 3, 4, 5]);
```

![alt text](image-5.png)

### Array methods to insert the elements :-
1. arr.push(...items) :- It adds one or more elements to the end of an array and returns the new length of the array.
2. arr.unshift(...items) :- It adds one or more elements to the beginning of an array and returns the new length of the array.
3. arr.splice(start : Number, deleteCount : Number, ...items) :- It adds one or more elements to the array at the specified position and returns the deleted elements. 
- If deleteCount is 0, no elements are deleted. 
- If deleteCount is undefined, all elements in the array from the start position to the end of the array are deleted.<br>
- eg:-
```JS
 let arr = [1, 2, 3, 4, 5];
        console.log("Original Array:", arr);
        // Inserting an element at the beginning
        arr.unshift(0);
        console.log("After unshift(0):", arr);
        // Inserting an element at the end
        arr.push(6);
        console.log("After push(6):", arr);
        // Inserting an element at a specific index
        arr.splice(3, 0, 2.5); // Insert 2.5 at index 3
        console.log("After splice(3, 0, 2.5):", arr);
        // Inserting multiple elements at a specific index
        arr.splice(2, 0, 1.5, 2.0); // Insert 1.5 and 2.0 at index 2
        console.log("After splice(2, 0, 1.5, 2.0):", arr);

```
![alt text](image-6.png)

4. arr.concat(...items) :- It returns a new array that contains the elements of the original array and the elements of the array(s) passed as arguments. It does not modify the original array. 
- eg:-
```JS
let names = ["Rohit", "Virat", "Dhoni"];
let teams = ["MI", "RCB", "CSK"];

let combinedData = names.concat(teams);
console.log("Combined Data:", combinedData);
```
![alt text](image-7.png)


### Array methods to delete the elements :-
1. arr.pop() :- It removes the last element from an array and returns the removed element. If the array is empty, it returns undefined. 
2. arr.shift() :- It removes the first element from an array and returns the removed element. If the array is empty, it returns undefined.
3. arr.splice(start : Number, deleteCount : Number) :- It removes elements from an array and returns the deleted elements. 
- If deleteCount is 0, no elements are deleted.
- If deleteCount is undefined, all elements in the array from the start position to the end of the array are deleted.
- eg:-
```JS
let teams = ["MI", "CSK", "RCB", "KKR", "SRH", "DC", "PBKS", "GT", "LSG"];
        console.log("Original Array:", teams);
        // Deleting an element from the beginning
        teams.shift();
        console.log("After shift():", teams);
        // Deleting an element from the end
        teams.pop();
        console.log("After pop():", teams);
        // Deleting an element at a specific index
        teams.splice(2, 1); // Delete the element at index 2
        console.log("After splice(2, 1):", teams);
        // Deleting multiple elements at a specific index
        teams.splice(3, 2); // Delete 2 elements starting from index 3
        console.log("After splice(3, 2):", teams);
```
![alt text](image-8.png)

### Sorting in array :-
1. arr.sort() :- It sorts the elements of an array in place and returns the array. The default sort order is according to the string Unicode code points. Therefore, the order of sorting is based on the ASCII value of the characters.
- If the array contains only one element, it returns the array as it is. 
- If the array contains more than one element, it sorts the array in ascending order. 
- If the array contains a mix of numbers and strings, it sorts the numbers in ascending order and the strings in ascending order based on their ASCII values.


Array.sort(compareFunction) : []<br>
arrayName.sort([compareFunction])<br>
1. Default sorting : string sorting[map with unicode value and performing sorting]
2. custom sorting<br>
Rule: 
- If result of (a - b) < 0, a comes before b
- If result of (a - b) > 0, a comes after b
- If result of (a - b) = 0, order of a and b remains same 


### filter() :-
Returns a new array containing elements that passes the test (i.e., returns true) from a callback function.<br>
Syntax : arr.filter(callback(element, index, array), thisArg)
- callback : function that each element in the array will be passed to 
- element : the current element being processed in the array
- index : the index of the current element being processed in the array
- array : the array the current element belongs to
- thisArg : value to use as this when executing callback

#### Rules :-
1. don't use function keyword while writing the arrow function
2. if we have only one parameter then don't use () to specify the parameter name
3. if we have only statements as the function body then don't use {} to define the body
4. if the function returns a value, then we don't need to use return keyword

### reduce() :-
Reduces the array to a single value by applying a function to each element in the array and accumulating the result. The function takes four arguments: accumulator, current value, index, and array.<br>
Syntax : arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
- callback : function that each element in the array will be passed to
- accumulator : the accumulated value so far in the reduction
- currentValue : the current value being processed in the array
- index : the index of the current element being processed in the array 
- array : the array the current element belongs to
- initialValue : the value to use as the initial value of the accumulator, or the first element of the array if no initial value is provided.

### json :-
