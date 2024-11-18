/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  /* eslint @typescript-eslint/no-var-requires: "off" */
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffnameColor: 'darkturquoies',
    traceHooks: true,
    trackAllPureComponents: true,
  });
}
