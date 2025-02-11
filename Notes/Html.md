# Web UI Full Stack with React

- This course is for absolute beginners.
- Topics required for experts (Advanced Level) will also be covered.
- Module-wise projects will be covered.
- Final End-to-End Project:
  - One project will be done by the instructor.
  - Another project you should build.

---

## Types of Software Applications
1. **Desktop Applications**
2. **Web Applications**
3. **Distributed Applications**
4. **Mobile Applications**
5. **AI Applications**
6. **IoT Applications**
7. **2D and 3D Applications**

**Note:**  
Desktop applications do not require internet communication.

### Explanation:
- Example Scenario: Suppose we have a hospital without branches. We need to:
  - Track doctor login/logout time.
  - Record which patients visited and to which doctors they were assigned.
  - Track patient status.
- For this purpose, a locally used application can be built, referred to as a **"Desktop Application"**.

**Examples of Desktop Applications:**
- Notepad
- Paint
- Calculator

---

### Web Applications
Distributed applications are those where interactions happen via an app or browser with the help of the internet.

**Explanation:**
- Assume we need to take an appointment with a doctor at Apollo Hospital.
- Steps:
  1. Check internet connection.
  2. Open the browser and type the Apollo Hospital website.
  3. Alternatively, install the Apollo app for easier use.

**Examples of Web Applications:**
- Netflix
- Flipkart
- Amazon
- Myntra

---

### Mobile Applications
Examples include:
- Calculator
- Calendar
- Gallery

---

### AI Applications
Examples include:
- ChatGPT
- Siri
- Google Home
- Amazon Alexa

---

### IoT Applications
Examples include:
- Smartwatches
- Smartbands (IoT devices use sensors to track activities like calories burned)

---

### 2D and 3D Applications
- Examples: Gaming applications
  - Bike games, where acceleration and gameplay occur on the screen.

---

### Focus of the Course
With the help of this course, we will learn to build:
1. **Web Applications**
2. **Distributed Applications**

**Examples:**  
- Netflix  
- YouTube  
- Spotify  
- Instagram  

---

## Career Outcomes After Learning This Course:
1. **Web UI Full Stack Developer**
2. **UI Developer**
3. **UI/UX Developer**  
   - Focus on creating accessible and user-friendly web applications.
   - **Accessibility:** Building web applications for disabled and challenged individuals.
4. **MERN Stack Developer**
   - MongoDB
   - Express.js
   - React.js
   - Node.js
5. **MEAN Stack Developer**
   - MongoDB
   - Express.js
   - Angular
   - Node.js
---

## Topics for the Course

### Frontend
1. HTML
2. CSS
3. Bootstrap
4. Sass
5. JavaScript
6. jQuery
7. React (For UX)

---

### Backend
1. Node.js
2. Express.js
3. MongoDB

---

### Additional Tools for Freelancing
1. CorelDRAW
2. Photoshop
3. Adobe Reader

---

## Designing Web Applications

### What is the Internet?
- Internet is a **Wide Area Network (WAN)** that connects computers worldwide.
- It makes information accessible anytime, anywhere, and on any device.
- The first computer network was **ARPANET**, introduced by **US-DOD** (Department of Defense) in the early 1960s.

**Key Notes:**
- ARPANET: Advanced Research Projects Agency Network.
- Early internet usage required knowledge of protocols like SMTP, FTP, etc.
- The main problem with the internet was **"No restrictions."**
- To address this, **Tim Berners-Lee** introduced the **Web**.

---

### What is the Web?
- A **portion of the internet** with restricted access.
- **Tim Berners-Lee**, the father of the web, introduced the concept.
- Web standards are maintained by:
  - **W3C (World Wide Web Consortium):** [www.w3.org](https://www.w3.org)
  - **WHATWG:** [whatwg.org](https://whatwg.org)
- **Dark Web:** Restricted and illegal access to parts of the web.
- The current web version is **"Web 3."**

---

### Structure of a Web Application
Every web application is a **3-tier application**:
1. **Database Tier:** Stores data.
2. **Application Tier:** Hosts the application.
3. **Presentation Tier:** Provides the user interface (UI).

As a **full-stack developer**, you will work with:
1. Application Layer
2. Database Layer
3. Presentation Layer (UI Developer's role: HTML, CSS, JavaScript, jQuery, Bootstrap, etc.)

---

## Getting Started with Web Development

### Day 1: Setting Up Tools
1. **Download and Install Node.js**
   - We are installing Node.js for its package manager, **NPM**.
   - A package manager is a tool to install, update, and uninstall libraries.
   - Examples of package managers:
     - npm
     - yarn
     - rubygems
     - Composer
     - NuGet
     - Bower

   **Installation Process:**
   - Visit [nodejs.org](https://nodejs.org/en)
   - Download version **20.x**
   - Install the setup file and verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **Download and Install Visual Studio Code**
   - An editor used to build, debug, test, and deploy applications.
   - Other editors: Sublime, Notepad++, WebStorm.
   - Download VS Code from [code.visualstudio.com](https://code.visualstudio.com/).

3. **Install Extensions in VS Code**
   - **Live Server** (by Ritwick Dey)
   - **vscode-icons**
   - **IntelliSense for CSS Class Names** (by Zignd)
   - **Live Preview** (by Microsoft)

---

### Day 2: Building a Local Web Application
1. **Create a New Website:**
   - Open any folder for your project.
   - Initialize with `npm init -y` to create a `package.json` file.
   - Structure your project with:
     - **public:** Static files like images, documents, multimedia.
     - **src:** Dynamic resources like CSS, SCSS, JS, TS.

2. **Run the Application:**
   - Start a local server using the **Live Server** extension.
   - Access the project at `http://localhost:5500/`.

---

### Web Page Basics
- A **Web Page** is a hypertext document providing a UI for user interaction.
- Types of Web Pages:
  1. **Static Pages:**
     - Displays the same information for all users.
     - File extension: `.html` or `.htm`
     - Example: Tutorial websites.
  2. **Dynamic Pages:**
     - Displays content based on user requests.
     - File extension: `.jsp`, `.php`, `.aspx`, etc.
     - Example: Booking websites like IRCTC.

---

### HTML Overview
- **HTML:** Stands for HyperText Markup Language.
- **Purpose:** Used for presentation.
- **Markup:** Refers to marking up content for proper display.

---

### Evolution of HTML
1. Early 1960s: GML and SGML (Generic and Standard Markup Languages).
2. 1990s: Tim Berners-Lee introduced HTML for the Web.
3. 2004: WHATWG began developing HTML4.0.
4. Latest Version: HTML5 (2014).

---

### What's New in HTML5?
- Browser-friendly and SEO-friendly features.
- **Responsive Designs:** Ensures compatibility across devices like phones and tablets.

---

### Browser Architecture
Components of a Browser:
1. **User Interface:** Title bar, address bar, refresh buttons, etc.
2. **Browser Engine:** Converts HTML/CSS into browser-readable format.
   - Examples: Gecko, WebKit, Chakra.
3. **Rendering Engine:** Responsible for presenting processed content.
4. **JavaScript Interpreter:** Processes JavaScript for interactivity.
5. **Network Module:** Handles resource loading and network requests.
6. **UI Backend:** Logic for browser UI.
7. **Data Persistence:** Stores client data (local storage, session storage, cookies).

---

---

### HTML Parsing in the Browser
Flow of HTML Parsing:
1. **Markup:** Converts bytes into characters.
2. **Characters:** Converted into tokens (tags).
3. **Tokens:** Converted into elements (nodes).
4. **Nodes:** Represented as DOM (Document Object Model).
5. **DOM:** Layout is created.
6. **Rendering:** The layout is painted onto the screen.

- **HTML:** Presents content on the browser using elements arranged hierarchically in the DOM.
- **JavaScript:** Used to modify the DOM dynamically.

---

### HTML Element Types
HTML elements are classified into five categories:
1. **Normal Elements:**
   - Require a start and end tag.
   - Example:
     ```html
     <b>Hello</b>
     ```

2. **Void Elements:**
   - Do not have an end tag.
   - Example:
     ```html
     <img src="image.jpg" alt="Image Description">
     ```

3. **Raw Text Elements:**
   - Contain raw content without tags.
   - Examples:
     ```html
     Temperature 20°C  ₹45000
     ```

4. **RC Data Elements (Rich Text Content):**
   - Do not allow other elements within their context.
   - Example:
     ```html
     <textarea>Content inside</textarea>
     ```

5. **Foreign Elements:**
   - Not natively understood by the browser.
   - Require additional libraries for compatibility (e.g., SVG, MathML, Canvas).

---

### HTML Page Structure
1. **Doctype Declaration:**
   - The `<!DOCTYPE html>` declaration indicates the use of HTML5.
   - Example:
     ```html
     <!DOCTYPE html>
     ```

2. **Document Scope:**
   - Defined by the `<html>` element.
   - Includes `lang` attribute for language specification:
     ```html
     <html lang="en-US">
     ```

3. **Head Section:**
   - Contains metadata, links, styles, and scripts:
     ```html
     <head>
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <title>Page Title</title>
         <link rel="stylesheet" href="styles.css">
     </head>
     ```

4. **Body Section:**
   - Contains the main content rendered in the browser.

---

### Metadata in HTML
1. **Viewport Settings:**
   - Ensures the webpage is responsive.
   - Example:
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1">
     ```

2. **Refresh Attribute:**
   - Automatically refreshes the page:
     ```html
     <meta http-equiv="refresh" content="5">
     ```

3. **SEO Metadata:**
   - **Keywords:**
     ```html
     <meta name="keywords" content="HTML, CSS, JavaScript">
     ```
   - **Description:**
     ```html
     <meta name="description" content="Learn HTML basics.">
     ```
   - **Character Set:**
     ```html
     <meta charset="UTF-8">
     ```

---

### HTML Body Section
1. **Background and Text Colors:**
   - Example:
     ```html
     <body bgcolor="lightblue" text="darkblue">
     ```

2. **Background Image:**
   - Example:
     ```html
     <body background="image.jpg">
     ```

3. **Content Alignment:**
   - Use `align` for text alignment:
     ```html
     <body align="center">
     ```

4. **Margins:**
   - Example:
     ```html
     <body topmargin="20" leftmargin="15">
     ```

5. **Visited and Active Link Colors:**
   - Example:
     ```html
     <body vlink="gray" alink="red">
     ```

---

### HTML Semantics for Layout Design
1. **Traditional Layouts:**
   - Old layouts were created using tables (not SEO-friendly).

2. **Modern Layouts:**
   - HTML5 introduced semantic elements:
     - `<aside>`: Sidebar content.
     - `<article>`: Independent content.
     - `<header>`: Page header.
     - `<footer>`: Page footer.
     - `<div>`: Generic container.
     - `<span>`: Inline container.
     - `<section>`: Thematic grouping of content.
     - `<main>`: Entry point of the webpage.

---

### HTML Padding and Margins
1. **Padding:** Creates space around content inside a border.
   - Example:
     ```css
     padding: 10px;
     ```

2. **Margins:** Creates space around an element outside its border.
   - Example:
     ```css
     margin: 20px;
     ```

---

### Navigation Bar
- Use `<nav>` for navigation:
  ```html
  <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
  </nav>
<footer>
    <p>&copy; 2024 Your Company</p>
</footer>
---

### Adding Images with Captions
- Use `<figure>` and `<figcaption>` for SEO-friendly image captions.

**Example:**
```html
<figure>
    <img src="example.jpg" alt="Example Image">
    <figcaption>This is an example caption.</figcaption>
</figure>












---

### HTML Layout Semantics
HTML5 introduced new semantic tags to make layouts SEO-friendly:
1. `<header>`: Represents the header section of a page.
2. `<footer>`: Represents the footer section.
3. `<main>`: Denotes the primary content area.
4. `<section>`: Defines thematic grouping of content.
5. `<article>`: Independent, self-contained content.
6. `<aside>`: Sidebar or content indirectly related to the main content.
7. `<nav>`: Represents navigation links.
8. `<div>` and `<span>`: Non-semantic elements for grouping content.

**Example Layout:**
```html
<header>
    <h1>Page Title</h1>
</header>
<main>
    <section>
        <h2>Section Title</h2>
        <p>Content goes here...</p>
    </section>
    <aside>
        <p>Additional info or ads...</p>
    </aside>
</main>
<footer>
    <p>&copy; 2024 Your Company</p>
</footer>

