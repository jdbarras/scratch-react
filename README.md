# scratch-react (WIP)

This is meant to serve as a framework for a React app. It will have a minimal framework to start developing with React in ES6.

## Tools:

### React  
A view library for creating interactive UIs.  
This project uses (versions are at time of write up):
```JSON
"react": "^16.9.0"
```
### ReactDOM
Allows React to access and modify the DOM.  
This project uses (versions are at time of write up):
```JSON
"react-dom": "^16.9.0"
```
### React Router
Provides declaritive routing in application
```JSON
"react-router-dom": "^5.0.1"
```
### Babel
Allows us to use modern JS (ES6+ is what we're using here) and JSX (html-like code inside of React components) by transpiling it into browser-friendly JavaScript.  
This project uses (versions are at time of write up):
```JSON
"@babel/cli": "^7.5.5",
"@babel/core": "^7.5.5",
"@babel/preset-env": "^7.5.5",
"@babel/preset-react": "^7.0.0"
```
`cli` and `core` are involved in transpiling and watching for changes to development JS. `preset-env` contains settings for transpiling ES6+ JS. `preset-react` contains settings for transpiling JSX. 

### Webpack
Bundler that lets us have many JS files in our project allowing separation of concerns (SOC) and componentization while outputing a single bundle.js for distribution.  
This project uses (versions are at time of write up):
```JSON
"babel-loader": "^8.0.5",
"css-loader": "^2.1.1",
"style-loader": "^0.23.1",
"webpack": "^4.39.3",
"webpack-cli": "^3.3.7",
"webpack-dev-server": "^3.8.0"
```
Lot of stuff here, but basically there are three things happening:  
- `webpack` and `webpack-cli` - The core components of webpack necessary for webpack to do anything.
- `*-loader` - webpack is separated into individual loaders so you only have to pull in what you need. Here we are loading babel and styles so that they can be bundled.
- `webpack-dev-server` - a development server that runs the app and updates on save. When configured properly and when used with `react-hot-loader` this server has "hot module replacement" enabled. You won't have to refresh the page or anything. This saves a lot of dev time.

## Installation

This is designed to get you going very quickly. You can start an entirely new React-Powered app, or you can just mirror this repo for a quick sandbox for a proof of concept. To get a running environment complete with dev server:

- Mirror the scratch-react repo to a new project repo:  
  1. Create a bare clone:  
    `git clone --bare git@github.com:jdbarras/scratch-react.git`
  2. Make a new repo on github
  3. Mirror-push to the new repo:  
    `cd scratch-react`  
    `git push --mirror git@github.com:[githubacct]/[new-repo].git`
  4. Remove the temporary local repo from step 1:  
    `cd ..`  
    `rm -rf scratch-react`
  5. Clone your repo to your local:  
    `git clone git@github.com:[githubacct]/[new-repo].git`

- Run `npm install`
- Run `npm start`

That's it. You can open the app by browsing to `localhost:3000`
