import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import routes from "./routes";

function SmartLink(props) {
  const { name, params, ...linkProps } = props;
  const [link, setLink] = useState(routes.get(name) || "");

  useEffect(() => {
    if (!name) return;
    function doUpdate() {
      const route = routes.get(name);
      const link = route(params);
      setLink(link);
    }

    if (!routes.has(name)) return routes.onUpdate(doUpdate);
    doUpdate();
  });

  return (
    <Link to={link} {...linkProps}>
      {props.children}
    </Link>
  );
}

export default withRouter(SmartLink);
