'use strict';

const cspConfigProd = {
  'default-src': "'self'",
  'base-uri': "'self'",
  'object-src': "'none'",
  'script-src': [
    "'self'",
    "'unsafe-eval'",
    'https://*.swooptech.dev/',
    'https://www.google-analytics.com/analytics.js',
    'https://www.google-analytics.com/analytics_debug.js',
    'https://widget.intercom.io',
    'https://js.intercomcdn.com',
    'https://prod.webpu.sh',
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    'https://*.swooptech.dev',
    'https://fonts.googleapis.com/css',
  ],
  'img-src': [
    "'self'",
    'data:',
    'https://*.swooptech.dev',
    'https://*.blob.core.windows.net',
    'https://static.intercomassets.com',
    'https://js.intercomcdn.com',
    'https://downloads.intercomcdn.com',
    'https://gifs.intercomcdn.com',
  ],
  'font-src': [
    "'self'",
    'data:',
    'https://*.swooptech.dev',
    'https://fonts.gstatic.com',
    'https://js.intercomcdn.com/fonts/',
  ],
  'connect-src': [
    "'self'",
    'https://*.swooptech.dev',
    'https://api-dot-swoop-dev-app-analytics-pn491.appspot.com/api/',
    'https://api.alpha.swooptech.dev',
    'https://*.swoopfunding.com/hawk/api/',
    'https://*.google-analytics.com/',
    'https://*.intercom.io',
    'https://uploads.intercomcdn.com',
    'wss://*.intercom.io',
  ],
  'media-src': ['https://js.intercomcdn.com'],
  'frame-src': ['https://www.google.com'],
};

let cspConfig = cspConfigProd;

if (process.env.NODE_ENV !== 'production') {
  cspConfig = {
    ...cspConfigProd,
    'script-src': [
      ...cspConfigProd['script-src'],
      "'unsafe-eval'",
      "'unsafe-inline'",
      'http://localhost:*',
    ],
    'style-src': [...cspConfigProd['style-src'], 'http://localhost:*'],
    'img-src': [...cspConfigProd['img-src'], 'http://localhost:*'],
    'font-src': [...cspConfigProd['font-src'], 'http://localhost:*'],
    'connect-src': [
      ...cspConfigProd['connect-src'],
      'http://*:*/sockjs-node/',
      'ws://*:*/sockjs-node/',
      'localhost:*',
    ],
  };
}

module.exports = cspConfig;
