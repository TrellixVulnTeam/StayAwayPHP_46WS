import React from "react";
import Israel from "@svg-maps/israel";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

class Geolocalisation extends React.Component {
  render() {
    return (
      <div>
        <SVGMap map={Israel} />
        <p>Coucou géoloc</p>
      </div>
    );
  }
}

export default Geolocalisation;
