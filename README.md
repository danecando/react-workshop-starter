react-workshop-starter
====

[![Build Status](https://travis-ci.org/danecando/react-workshop-starter.svg)](https://travis-ci.org/danecando/react-workshop-starter) [![bitHound Dependencies](https://www.bithound.io/github/danecando/react-workshop-starter/badges/dependencies.svg)](https://www.bithound.io/github/danecando/react-workshop-starter/master/dependencies/npm) [![bitHound Dev Dependencies](https://www.bithound.io/github/danecando/react-workshop-starter/badges/devDependencies.svg)](https://www.bithound.io/github/danecando/react-workshop-starter/master/dependencies/npm)

Boilerplate project for [React Workshop](https://github.com/danecando/react-workshop); Part of the [UXDevSummit](http://uxdsummit.com/) conference.

This is the starting point for the workshop. We will use this to do some hands-on app building and hopefully learn some React & Flux/Redux along the way !

Better documentation of this boilerplate to come soon...

### About

This boilerplate uses [Webpack](https://webpack.github.io) to create a client-side application bundle. Webpack is configured for ES6 & JSX via [Babel](http://babeljs.io/). It's not configured for production use but you can always add another Webpack configuration for that. 

The client application code lives in the src/ directory and is compiled to `public/assets/js/app.js`. During development it uses a [Browser Sync](browsersync.io) server with webpack-dev-middleware & webpack-hot-middleware for automatic page refreshes and hot code updates.

We will only be building SPA(s) so the client application is mounted to the `public/index.html` file. `public/` is our static file directory served by our development server.

The boilerplate comes with a HelloWorld component that is accompanied with a couple of unit tests to give our project some structure and a testing example. It uses [Mocha](https://mochajs.org/) for the test runner, [Chai](http://chaijs.com/) for the assertion library, and Airbnb's [Enzyme](http://airbnb.io/enzyme/) library to make it easier to test React components.

We also have [eslint](http://eslint.org/) configured for our code linting and Facebook's [flow](http://flowtype.org/) to enable type checking.

Also, I've included a [Vagrant](https://www.vagrantup.com/) configuration with an accompanying provision bash script if you would like to spin up a VM for your dev environment.
 
 ### Styles
 
 I've included [React Toolbox](http://react-toolbox.com/#/) for some awesome Material Design components. It uses modular css -- take a look at HelloWorld.jsx and it's style.scss file or [css-loader](https://github.com/webpack/css-loader) to see how this is used.
 The base styles in `src/styles` has boostrap 4 scss available to you. Currently I've only included their mixins and grid but feel free to use them as you please. If you want to use any variables or mixins from your base styles in a component's stylesheet you must `@import "~_globals.scss";` at the top. See `HelloWorld/style.css`
 * Any styles you add to `src/styles` will be compiled into a single style.css file that is included index.html
 * Any styles coupled with a component outside of src/styles uses modular css and will be inlined

### Installation

```bash
git clone https://github.com/danecando/react-workshop-starter.git workshop
cd workshop
npm install
```

### Commands

* `npm start` - Spins up our development server and opens up the project in a new browser tab
* `npm run build` - Writes our Webpack bundle to disc at `public/assets/js/app.js`
* `npm run lint` - Lints the src files with eslint
* `npm run flow` - Type checks our src files *(if enabled and flow is installed)*
* `npm run test` - Runs our unit tests w/ Mocha

### Contributing / Support

Submit a PR / Open an issue




