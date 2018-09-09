/*
 * @author: wayou
 * @date: 2018-09-09 22:56:59
 * @description: examples for local development
 */

// tslint:disable:no-console

import * as React from "react";
import * as ReactDom from "react-dom";
import MyComponent from "../src/MyComponent";
import "./examples.scss";

class ImageExamples extends React.Component {
  public render() {
    return (
      <div>
        <p>case 1</p>
        <MyComponent message="Allo!" />
        <hr />

        <p>case 2</p>
        <MyComponent className="my-class" />
      </div>
    );
  }
}

ReactDom.render(<ImageExamples />, document.getElementById("app"));
