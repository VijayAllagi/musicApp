# Music Library

This project is a music library application built with React, TypeScript, and Tailwind CSS. It allows users to search, group, and sort songs in their music library.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Building the Project](#building-the-project)
- [Deploying the Project](#deploying-the-project)
- [Running Tests](#running-tests)

## Installation

To get started with the project, clone the repository and install the dependencies:

```sh
git clone https://github.com/VijayAllagi/musicApp.git
cd musicApp
npm install
```

## Scripts

The following scripts are available in the package.json file:

- `start`: Starts the development server using Webpack.
- `build`: Builds the project for production using Webpack.
- `deploy`: Deploys the dist directory to GitHub Pages using gh-pages.
- `test`: Runs the test suite using Jest.
- `coverage`: Runs the test suite and generates a coverage report using Jest.

## Building the Project

To build the project for production, run the following command:

```sh
npm run build
```

This will generate the production-ready files in the dist directory.

## Deploying the Project

To deploy the project to GitHub Pages, follow these steps:

1. Ensure the `homepage` field in `package.json` is set to the correct URL of your GitHub Pages site.
2. Run the build script to generate the dist directory:
    ```sh
    npm run build
    ```
3. Deploy the dist directory to GitHub Pages:
    ```sh
    npm run deploy
    ```

## Running Tests

To run the test suite, use the following command:

```sh
npm test
```

To generate a coverage report, use the following command:

```sh
npm run coverage
```

This will run the tests and generate a coverage report in the coverage directory.

## Additional Information

- **Webpack Configuration**: The project uses Webpack for bundling the assets. The configuration can be found in the `webpack.config.js` file.
- **Babel Configuration**: The project uses Babel to transpile JavaScript and TypeScript files. The configuration can be found in the `.babelrc` file.
- **Jest Configuration**: The project uses Jest for testing. The configuration can be found in the `jest.config.js` file.
- **TypeScript Configuration**: The project uses TypeScript for type checking. The configuration can be found in the `tsconfig.json` file.