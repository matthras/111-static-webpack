# 1-1-1 Static Webpack Build
## 1 HTML file, 1 CSS file, 1 JS file

If you want a simple setup where you only need one HTML file, one CSS/SCSS file, and one JS file, then this is the build for you. Simply edit `main.html`,`main.scss`, and `main.js` and Webpack will spit out a minified set of static files into your `dist` folder.

### Requirements

* [NodeJS](https://nodejs.org/en/)

### Setup

* `git clone https://github.com/matthras/111-static-webpack`, or [download the ZIP directly](https://github.com/matthras/111-static-webpack/archive/master.zip) and extract it into the folder of your choice.
* `npm install`

### Instructions

* `npm build`: compile your static files which can be found in your `dist` folder.
* `npm start`: start a server that has live reload (i.e. your browser will automatically refresh whenever you make changes to the base files). Default URL is `localhost:6969`.

