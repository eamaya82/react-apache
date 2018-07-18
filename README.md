# Try React in apache
This files are the implementation of React Standalone (without NodeJS), using SystemJS to allow loading files (import, export, etc) *(the development and production files are included to be changed if needed)* and some SystemJS-plugins.

[TOC]

> this set of files are designed to test ReactJS (or to follow tutorials) if you already have apache installed (can't or want to install Node, npm, webpack and that bunch of stuff .... You can get rid of those installations using Docker. Give it a shot, you'll thank me later)

If you need something easier, read "React without npm babel or webpack" here: https://medium.com/@clmyles/react-without-npm-babel-or-webpack-1e9a6049714 I started with that, but while I was following React tutorials *(that usually have webpack)* , I needed something to load external files, that was easy to configure and that "DIDN'T REQUIRE NodeJS" to work *(and if possible, similar to how they are loaded with Webpack)*, I tried several libraries and finaly found the one that worked for me.

## There is no installation
Just copy the files to the web directory, the files are ready to use, in fact, they are the code for the "Tutorial: Intro to React" https://reactjs.org/tutorial/tutorial.html. 
I improved the code with the files separation for each component and everything else ready to use *(or take it as an example about how to do something else)*

## Directory/Files estructure
In the root dir you can find the **index.html** file that loads SystemJS `system.src.js` and its configuration `config.js`. It also points to the `/src/index.js` file as starting point, but it can be changed depending on your thoughts.
Now we're talking about the configuration, get know that the SystemJS loaded modules/plugins are:
- **babel** to transpile code through plugin-babel + systemjs-babel-build + babel-helpers. 
- **react** through react standalone (react, react-dom).
- **CSS-loader** to use `import 'file.css';`

## How to import files
Since these plugins are configured in SystemJS are called in this way
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';  //to load css files
// plugin-babel transpilates when calling/importing the .js automatically
```
but all the other files are loaded/imported in this way
```javascript
import {Game} from 'game.js'; // you need { } and the extension (.js)
```

>__To add more modules of SystemJS__
>1. add the "module-file.js" in the folder src/libs/systemjs/
>2. add the relationship inside the map block "src/libs/systemjs/config.js"
> `map: { ... 'plugin-name': 'libs/systemjs/module-file.js', ... }`

these plugins are not included but are recommended: 
- plugin-image.
- plugin-text.
more from here https://github.com/systemjs/systemjs/blob/master/docs/plugins.md

The src/libs/systemjs directory contains several files, currently `index.html` points to `system.src.js` but it can be changed by the other versions of systemjs that are in the directory.


Tutorial Intro to React: https://reactjs.org/tutorial/tutorial.html
Final code of tutorial: https://codepen.io/gaearon/pen/gWWZgR?editors=0010
