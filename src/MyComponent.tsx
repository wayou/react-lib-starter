/*
 * @author: <user_name>
 * @date: <datetime>
 * @description: your component code
 */

import * as React from "react";
import "./MyComponent.scss";

interface IMyComponentProps {
  /**
   * custom class name
   */
  className?: string;

  /**
   * message to display
   */
  message?: string;
}

class MyComponent extends React.Component<IMyComponentProps, {}> {
  public static defaultProps: Partial<IMyComponentProps> = {
    className: "",
    message: "Allo!",
  };

  public render() {
    const { className, message } = this.props;
    return <div className={className}>{message}</div>;
  }
}

export default MyComponent;
