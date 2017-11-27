# 1-1-1 Static Webpack Build
## 1 HTML file, 1 CSS file, 1 JS file

If you want a simple setup where you only need one HTML file, one CSS/SCSS file, and one JS file, then this is the build for you. Simply edit `main.html`,`main.scss`, and `main.js` and Webpack will spit out a minified set of static files into your `dist` folder.

A couple of notes:

* You can write regular CSS in `main.scss`, but the feature is there for those who know how to write SCSS and take advantage of its flexibility.

### Requirements

* NodeJS - Can be downloaded [here](https://nodejs.org/en/) and pick either version.
* Git (Optional) - Can be downloaded [here](https://git-scm.com/).

### Setup

* Open a Command Prompt in the folder/directory where you want your project folder to be. In Windows 10 you can easily click on File > 'Open Command Prompt'. If you're using anything else you probably knew this already!
* Type in `git clone https://github.com/matthras/111-static-webpack` (or [download the ZIP directly](https://github.com/matthras/111-static-webpack/archive/master.zip) and extract it into your folder/directory).
* Navigate into that directory (`cd <directory name>`) and type `npm install`.
* You're good to go! Open up `main.html`, `main.scss` and `main.js` in your text editor of choice and go!

### Instructions

* `npm build`: compile your static files which can be found in your `dist` folder.
* `npm start`: start a server that has live reload (i.e. your browser will automatically refresh whenever you make changes to the base files). Default URL is `localhost:9999`.

### Warnings

* This build uses node-sass which at the time of writing this, may cause problems for some. One solution is to use a verison of node lower then version 8. 

