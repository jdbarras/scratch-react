# scratch-react (WIP)

This is meant to serve as a framework for a React app. It will have a minimal framework to start developing with React in ES6.

## Tools:

### React  
A view library for creating interactive UIs.  
This project uses (versions are at time of write up):
```JSON
"react": "^16.7.0"
```
### ReactDOM
Allows React to access and modify the DOM.  
This project uses (versions are at time of write up):
```JSON
"react-dom": "^16.7.0"
```
### Babel
Allows us to use modern JS (ES6+ is what we're using here) and JSX (html-like code inside of React components) by transpiling it into browser-friendly JavaScript.  
This project uses (versions are at time of write up):
```JSON
"@babel/cli": "^7.1.0",
"@babel/core": "^7.1.0",
"@babel/preset-env": "^7.1.0",
"@babel/preset-react": "^7.0.0"
```
`cli` and `core` are involved in transpiling and watching for changes to development JS. `preset-env` contains settings for transpiling ES6+ JS. `preset-react` contains settings for transpiling JSX. 

### Webpack
Bundler that lets us have many JS files in our project allowing separation of concerns (SOC) and componentization while outputing a single bundle.js for distribution.  
This project uses (versions are at time of write up):
```JSON
"babel-loader": "^8.0.2",
"css-loader": "^1.0.0",
"style-loader": "^0.23.0",
"webpack": "^4.19.1",
"webpack-cli": "^3.1.1",
"webpack-dev-server": "^3.1.8"
```
Lot of stuff here, but basically there are three things happening:  
- `webpack` and `webpack-cli` - The core components of webpack necessary for webpack to do anything.
- `*-loader` - webpack is separated into individual loaders so you only have to pull in what you need. Here we are loading babel and styles so that they can be bundled.
- `webpack-dev-server` - a development server that runs the app and updates on save. When configured properly and when used with `react-hot-loader` this server has "hot module replacement" enabled. You won't have to refresh the page or anything. This saves a lot of dev time.

## Installation

This is designed to get you going very quickly. You can start an entirely new React-Powered app, or you can just fork this repo for a quick sandbox for a proof of concept. To get a running environment complete with dev server:

- Fork the repo and clone it onto your machine
- Run `npm install`
- Run `npm start`

That's it. You can open the app by browsing to `localhost:3000` - Changes will hot-reload.
