# React :-
## Single Page Application (SPA) :-
SPA is a web application that loads a single HTML page and dynamically updates that page as the user interacts with the application. This is in contrast to a traditional multi-page application, where each action would result in a full page reload. SPAs are typically built using JavaScript frameworks like React, Angular, and Vue.js. 

- In SPA , the initial HTML page is loaded from the server, and then the JavaScript code takes over, updating the page dynamically without requiring a full page reload. This approach provides a seamless user experience and allows for faster page loads. 
- SPAs are ideal for applications that require frequent updates, such as real-time data feeds, live updates, and interactive dashboards. They are also suitable for applications with complex user interfaces, such as single-page applications with multiple features and functionalities. 

## Component driven architecture :-
Component-driven architecture is a design pattern that structures an application as a collection of reusable components. Each component represents a self-contained piece of functionality, and they are combined to form the overall application. This approach promotes modularity, reusability, and maintainability. 

- component : A component is a self-contained piece of code that represents a UI element or a functionality. It has its own state, props, and behavior. Components are the building blocks of a React application. (Reusable UI element)
- Props : Props (short for "properties") are read-only values that are passed from a parent component to a child component. Props are used to communicate between components and are immutable. (Immutable data passed from parent to child) 

## React Element :-
React Element is a lightweight representation of a UI component. It's a plain JavaScript object that describes a component's properties and children. React Elements are used to render components in the DOM. 

It is an object that describes the properties of an actual DOM node which will be created by react. 

React in pure form:-
```JS
function App(){
    return React.createElement("div", null, "Hello, world!");
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));

```

## React Core:-
React Core is the foundation of the React library. It includes the core functionality of React, such as the React.createElement() method, the React.Component class, and the React.render() method. The React Core is responsible for rendering components to the DOM and managing the component lifecycle. 

## React Virtual DOM:-
React Virtual DOM is a lightweight in-memory representation of the real DOM. It's a copy of the actual DOM, but it's much faster and more efficient to update. When the state of the application changes, React updates the Virtual DOM first, and then it applies the changes to the real DOM. This approach reduces the number of DOM mutations and improves performance. 

## React Native:-
React Native is a framework for building native mobile applications using React. It allows developers to use React to build native iOS and Android apps, sharing the same codebase across platforms. React Native uses a combination of JavaScript and native code to render components on the mobile device. 

## library vs framework:-
A library is a collection of reusable code that can be used to perform a specific task. It's a set of functions, classes, or modules that can be imported and used in an application. 

A framework, on the other hand, is a more comprehensive structure that provides a set of pre-built components , tools, and guidelines for building an application. React is a library, not a framework, as it provides a set of reusable components and tools for building user interfaces, but it doesn't enforce a specific architecture or structure.

## JSX :-
JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files . It's a way to write React components in a more declarative and readable way. JSX is not required for React, but it's widely used and recommended. 

### transpilation :
Transpilation is the process of converting code written in one programming language into another language. In the case of JSX, it's transpiled into regular JavaScript by the Babel compiler. This allows JSX code to run in any environment that supports JavaScript. 

```HTML
<div>
  <h1>
    Hello World !
  </h1>
</div>
```
```JSX
// babel

import { jsx as _jsx } from "react/jsx-runtime";
/*#__PURE__*/_jsx("div", {
  children: /*#__PURE__*/_jsx("h1", {
    children: "Hello World !"
  })
});
```

## package manager :-
A package manager is a tool that helps you manage dependencies in your project. It allows you to install , update, and remove packages, as well as manage dependencies between packages. In the case of React , the most popular package manager is npm (Node Package Manager). 

### npm -
npm is the default package manager for Node.js. It allows you to install, update, and remove packages, as well as manage dependencies between packages. npm is widely used in the JavaScript ecosystem and is the recommended package manager for React projects.

### npx - 
npx is a package runner tool that comes bundled with npm. It allows you to run packages without installing them first. npx is useful for running one-off scripts or testing packages without affecting the project 's dependencies. 

## Setting up a React project:-
To set up a React project, you'll need to install the following packages:
- `create-react-app` (CRA) - a tool for creating new React projects
- `react` - the React library
- `react-dom` - the React DOM library
- `babel` - a transpiler for JSX and other syntax extensions
- `webpack` - a bundler for packaging and optimizing code
- `react-scripts` - a set of scripts for building and testing React projects

### Creating a react project:-
1. Traditional-->
- `create-react-app` command to create a new React project 
- `npx create-react-app my-app` command to create a new React project named `my -app` 
- `cd my-app` command to navigate to the newly created project directory 
- `npm start` command to start the development server and open the app in the browser 

2. Using vite :-
- `npm init vite-app my-app` command to create a new React project named `my-app ` 
- `cd my-app` command to navigate to the newly created project directory 
- `npm install` command to install the dependencies
- `npm run dev` command to start the development server and open the app in the browser 

```bash
npx create-react-app my-app
npm init vite-app my-app

//OR

npm create vite@latest
// enter project name
// select react
// select javascript
// change directory to the project
npm install
npm run dev

```

### `package.json` file:-
The `package.json` file is a JSON file that contains metadata about the project, including the project's name, version, and dependencies. It's used by npm to manage the project's dependencies and scripts. 

### Moduling :-
Moduling is a way to organize code in a project by breaking it down into smaller, independent modules . Each module can have its own dependencies and exports, making it easier to manage and reuse code. 

## What are Components :-
Components are reusable pieces of code that represent a UI element or a piece of functionality. They can be thought of as building blocks that can be combined to create a larger application. 

### Rules:-
1. Components name should start with a capital letter
2. Components should be written in a separate file
3. Components should be imported in the main file
4. Components should be used in the main file   
5. Components should be reusable
6. Components should be self contained
7. Components should be easy to understand and maintain

## exporting and importing components:-
- Exporting a component:-
```jsx
import React from 'react';
function MyComponent() {
    return <div>Hello World!</div>;
    }

export default MyComponent;
```

- Importing a component:-
```jsx
import MyComponent from './MyComponent.js';

```


### default export vs named export:-
- default export is used to export a single value from a module 
- named export is used to export multiple values from a module

## JSX -
JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files . It's used to create React components and is a key part of the React ecosystem. 

### JSX syntax:-
- JSX is written inside a JavaScript file
- JSX uses HTML-like syntax
- JSX uses JavaScript expressions inside curly braces { }
- JSX uses JSX elements to represent UI components
- JSX elements are self closing or have a closing tag
- JSX elements can have attributes and children
- JSX elements can be nested
- JSX elements can be conditionally rendered

### props :-
Props are short for "properties" and are a way to pass data from a parent component to a child component. They are read-only and can be used to customize the behavior of a component. 

### react-fragment :-
React Fragment is a new way to group a list of children without adding extra nodes to the DOM. It's a way to return multiple elements from a component without wrapping them in a single element. 
```jsx
function MyComponent() {
  return (
    <React.Fragment> // or <>
    <h1>Hello</h1>
    <p>World!</p>
    </React.Fragment> // or </>
  );
}
```

## React Router :-
React Router is a popular library for client-side routing in React applications. It allows you to create client -side routes and navigate between them. 

