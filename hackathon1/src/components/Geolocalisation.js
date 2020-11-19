import React from 'react';

import Taiwan from '@svg-maps/taiwan';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

class Geolocalisation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SVGMap map={Taiwan} />;
  }
}

export default Geolocalisation;
