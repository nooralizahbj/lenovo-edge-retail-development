# Lenovo Edge Retail landing page

This is a single page application using [Nuxt](https://nuxt.com/) and [Vue.js](https://vuejs.org/) to organise the project components. Using Vue allows us to separate the project into distinct files for each component. Nuxt makes a whole load of things easier, including compiling into a static site for hosting on Netlify. [Pinia](https://pinia.vuejs.org/) is also used to manage state across multiple components. [Prettier](https://prettier.io/) is also used to format your code from the command line.

## Installation

- Clone the repo to your machine
- `npm i`

## Development

- `npm run dev` to build, watch, and serve locally
- `npm run check` to check which files need formatting
- `npm run format` to auto-format all project files - do this before committing

## Deployment

The `master` branch is automatically deployed to Netlify whenever it is pushed.

If you want to test that the production build works, run `npm run build` to compile everything to the ./build directory, and then `npm run preview` to serve that directory in the browser.
