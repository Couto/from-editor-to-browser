// @flow

import React from 'react';

const Button = ({ children }) => (
  <div ref={(e) => { this.button = e; }}>
    {children}
  </div>
);
