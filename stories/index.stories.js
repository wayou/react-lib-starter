import React from "react";
import { storiesOf } from "@storybook/react";
import MyComponent from "../dist/MyComponent.esm";

storiesOf("MyComponent", module).add("display message", () => <MyComponent message="Allo!" />);
