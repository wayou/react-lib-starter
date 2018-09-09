import * as React from "react";
import { create } from "react-test-renderer";
import MyComponent from "../src/MyComponent";

test("Component should rendered", () => {
  const component = create(<MyComponent message="Allo!" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
