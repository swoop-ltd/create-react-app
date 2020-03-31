# react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

# @swoop-ltd/react-scripts

The following customisations are added as a part of swoop.

## CspHtmlPlugin

- To whitelist the content sources, a set of content security configs are added to the HTML meta tag. The configs can be found in

  `react-scripts/config/cspConfig.js`

  In `react-scripts/config/webpack.config.js`, add the below to the plugin section

  ```
  new CspHtmlWebpackPlugin(cspConfig, {
        enabled: true,
        hashingMethod: 'sha256',
        nonceEnabled: {
          'script-src': false,
          'style-src': false,
        },
      }),
  ```
