'use strict';

import React from 'react';
import DropZoneHolder from '../src/components/DropZoneHolder';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello World live</h1>
        <DropZoneHolder />
      </div>
    );
  }
}
