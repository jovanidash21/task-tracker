import React, { Component } from 'react';
var Spinner = require('react-spinkit');

const LoadingAnimation  = () => {
  return(
    <section className="loading-animation">
      <Spinner name='wandering-cubes' />
    </section>
  )
};

export default LoadingAnimation;