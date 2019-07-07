import React from "react";
import { Switch, Route } from "react-router-dom";
import { compile as compileRoute } from "path-to-regexp";
import routes from "./routes";

export default function SmartSwitch(props) {
  const mappedChildren = React.Children.map(props.children, child => {
    const { path, name, ...rest } = child.props;
    if (path) routes.add(name, compileRoute(path));
    return <Route path={path} {...rest} />;
  });

  return <Switch>{mappedChildren}</Switch>;
}
