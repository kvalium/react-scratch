# React from scratch

Create a React App step by step

## 1. Initialization

Add NPM packages and set git folder
```
yarn init
git init
yarn add react react-dom 
```

Add a `.gitignore` file

```
node_modules/
dist/ 
```

Create the `src/index.js` entry point:
```JSX
import React from 'react';
import ReactDOM from 'react-dom';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.getElementsByTagName('body')[0].appendChild(rootDiv);

ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('root'),
);

```


## Babel

Add packages
```
yarn add -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

Create a `.babelrc` file with:
```JSON
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```

## Webpack
Add Core packages
```
yarn add -D webpack webpack-dev-server webpack-cli

yarn add react-hot-loader
```

Add Plugins
```
yarn add -D html-webpack-plugin clean-webpack-plugin dotenv-webpack webpack-bundle-analyzer
```

Add Loaders
```
yarn add -D file-loader css-loader babel-loader style-loader
```

Add scripts in `package.json`:

```JSON
"scripts": {
  "build": "webpack",
  "start": "webpack-dev-server --hot"
},
```

Create the [`webpack.config.js`](./webpack.config.js) file


## ESLint

```
yarn add -D eslint
```

Run the wizard using `npx`:
```
npx eslint --init
```

Answers:
* How would you like to use ESLint? **To check syntax, find problems, and enforce code style**
* What type of modules does your project use? **JavaScript modules (import/export)**
* Which framework does your project use? **React**
* Where does your code run? **Browser**
* How would you like to define a style for your project? **Use a popular style guide**
* Which style guide do you want to follow? **Airbnb (https://github.com/airbnb/javascript)**
* What format do you want your config file to be in? **JavaScript**
* Would you like to install them now with npm? **Yes**