# A1: Hello, World

Traditionally, the first program you write in a new programming language prints out the phrase ”Hello, World”. This [practice](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program#History) was coined by Brian Kernighan, in his seminal book, *The C Programming Language* (which is considered by many as **the** book on programming).

In this assignment, you will familiarize yourself with the tools that we are using for this course (Git and Github Classroom, VSCode), as well as with the semantics of JavaScript. 

There are three tasks to complete, each in its own folder. You are expected to complete the tasks outlined in each section below. 

Your code is preliminarily autograded on submission. Additional feedback and scoring on code quality and execution is provided after the submission deadline has passed. You are welcome to submit an assignment multiple times to test your work.

Those savvy enough are also welcome to run tests locally. You will need [Node.js](https://nodejs.org/en/) installed, and then run `npm install` followed by `npm test`.

## Your environment
If you have not done so already in class, create a [GitHub](https://github.com/) Account and [register as a student](https://education.github.com/), install [GitHub Desktop](https://desktop.github.com/), [VSCode](https://code.visualstudio.com/), and [Google Chrome](https://www.google.com/chrome/).

In your filesystem, create a new folder called `dev` in your Home folder. This is where your code for this class will live. We’re now ready to clone down our assignment! When you open GitHub Desktop, you should be given the option to add or clone an existing directory. Select `f22-psam3210/a1-hello-world-[your-username]` and clone it to your computer. Set your Local Path into your `dev` folder that you just created.

## Development server
To properly run this assignment and all future assignments, you will need a webserver running. This is different than accessing files directly in in your browser as you may have done previously, and comes with many benefits. To run a webserver that serves your content (and therefore can be accessible from other devices too), `cd` into `a1` and type `python3 -m http.server` into your terminal. On older devices, you may also have to use `python -m SimpleHTTPServer` instead, but they do the same thing. 

Then, navigate to `http://localhost:8000` in Google Chrome. You should see a page with each of the exercises to navigate to. Clicking through will allow you to access each individual exercise and any changes made to the code will be reflected back in the browser.

When you are done, type `control-c` into your terminal where the web server is running to stop it.

### VSCode Option

VSCode supports a wide range of [extensions](https://marketplace.visualstudio.com/vscode) that are written by its community. One such extension is the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, which allows VSCode to run a development server for you to access. You are also welcome to use this for your development.

**As you develop, you may notice that your webpage does not always display the most up to date information. Make sure that you [disable cache](https://stackoverflow.com/a/7000899) or hard refresh Google Chrome (`Shift-Command-R`).**

## 0. Hello, World!

<img width="500" src="https://user-images.githubusercontent.com/207651/184189080-d594f49f-6e43-48d2-bc7e-a0d31618c50c.png">


In the folder `0-hello-world`, you will find two files:
```
0-hello-world
  |-hello-world.js
  |-index.html
```

`index.html` will be what you view in the browser, and will be what you view when navigate to it from the folder index page. This page will initially be blank. If you view the Console (accessible by right clicking on the page and clicking `Inspect Element`, followed by `Console`), you should also see an error. This is because we havent defined our JavaScript yet!

`hello-world.js` contains space for you to write your assignment code. In this exercise, fill in the [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) called `helloWorld`. This function should print out `Hello, World!` to the [console](https://www.geeksforgeeks.org/javascript-console-log-with-examples/) and then return `Hello, World!` as a string.

Your code is working if, in the browser, you see `Hello, World!` displayed prominently. It should also appear in the console.

All exercises will follow this format. There will be an `index.html` file that is used to render the results of your code, and then a separate `.js` file for you to write your code.

## 1. Alice, meet Bob

<img src="https://user-images.githubusercontent.com/207651/184188689-a8208f47-d96e-482a-87d3-c95bcb3ac77b.gif" width="500">

Alice and Bob are [two names](https://en.wikipedia.org/wiki/Alice_and_Bob) often used in the field of cryptography as placeholders for individuals. 

In this exercise, you pretend to be Alice, in an attempt to befriend Bob and steal his NFTs. You pose as a 20 year old individual and ask him his *name* and *age* (numerical only), in order to confirm his identity.

Bob, knowing you personally, expects you to respond and indicate whether he is younger or older than you (to confirm your identity). If you are the same age, respond as if he was older.

You should respond with either two of the following phrases:

* Age greater or equal to 20: `Hi [name]! You are older than me.`
* Age lesser than 20: `Hi [name]! You are younger than me.`

An example run to `respond('Eric', 28)` is `Hi Eric! You are older than me`.

You should use [string interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to do this. For example, if I wanted to respond with a variable `let w = 'Jello'` in a string, you could say 
```
let w = 'Jello';
let phrase = `${w} is yummy`; // Jello is yummy
```
## 2. RGB to CMYK

<img src="https://user-images.githubusercontent.com/207651/184187571-264b74ce-9ba2-456f-b764-c007f029de97.gif" width="500">

Color spaces are used to represent color differently. Print uses a subtractive color space composed of cyan, magenta, yellow, and black (CMYK). Digital uses an additive color space composed of red, green, and blue (RGB). Write a function that converts an input `r,g,b` value to `c,m,y,k` value. Use the following formulas: 

```
white = max(red/255, green/255, blue/255)
cyan = (white - red/255)/white
magenta = (white - green/255)/white
yellow = (white - blue/255)/white
black = 1 - white
```

An example run to `convert(255,143,0)` should be the array `[0.0,0.4392156862745098,1.0,0.0]`. You needn’t touch the final return value, and instead just set the variable values for `c,m,y,k` correctly.

Keep in mind that you will have to account for black. When all RGB values are black, white is zero. You cannot divide by 0 (you’ll get `NaN`) so you’ll have to figure out a way to handle this. A helpful function built in is [`Math.max()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max). 
```
let m = Math.max(5,10) // m = 10
```
