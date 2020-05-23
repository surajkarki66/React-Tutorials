## Bundler ##
-> a bundler alone would just concatenate files.

## Webpack ##
->  a webpack is also bundler and it also allows you  to optimize your files and you hook in 
    various plugins so called loaders. Also transform your files. eg. transpile next generation
    to current generation javascript .


### To start your workflow ###
1) npm init
2) npm install --save-dev webpack webpack-dev-server webpack-cli
3) manually create project directory
4) Writing your components, containers, hoc
5) Installing production dependencies
   npm install --save react react-dom react-router-dom

6) adding scripts to the package.json
7) Creating webpack configuration file
   eg: webpack.config.js

8) Install package called babel which manage the transpilation of next gen js
   eg: npm install --save-dev @bable/core @babel/preset-env @babel/preset-react @babel/preset-stage-2 babel-loader @babel/plugin-proposal-class-properties

9) Install couple of packages style-loader and css-loader
   eg: npm install --save-dev style-loader css-loader

10) Install post-css-loader
   eg: npm install --save-dev postcss-loader
   
11) Install a plugin 
   eg: npm install --save-dev autoprefixer

12) Install a package called url-loader and file-loader
   eg: npm install --save-dev url-loader file-loader

13) Install a package html-webpack-plugin which inject images and styles into the html
   eg: npm install -save-dev html-webpack-plugin