import React from "react";
import { Route } from "react-router-dom";
import { compile as compileRoute } from "path-to-regexp";
import routes from "./routes";

export default function SmartRoute(props) {
  const { name, path, ...routeProps } = props;
  //   const [compiledRoute, setCompiledRoute] = useState(null);

  //   console.log(path);
  //   useEffect(() => {
  //     if (!path) return;

  //     if (routes.has(name))
  //       console.warn(`Redefining smart route with name ${name}`);
  //     const compiledRoute = compileRoute(path);
  //     routes.set(name, compiledRoute);
  //     setCompiledRoute(compiledRoute);
  //   }, [name, path]);

  return <Route path={path} {...routeProps} />;
}

export { routes };
