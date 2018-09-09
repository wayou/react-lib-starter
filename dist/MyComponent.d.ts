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
declare class MyComponent extends React.Component<IMyComponentProps, {}> {
    static defaultProps: Partial<IMyComponentProps>;
    render(): JSX.Element;
}
export default MyComponent;
