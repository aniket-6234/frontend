import React, { memo } from "react";
// import { Route, Redirect } from "react-router";

const PrivateRoutes = ({ component: Component, acl, ...rest }) => {
  return (
    <div></div>
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     localStorage.getItem("token") !== null && <Component {...props} />
    //   }
    // />
  );
};

export default memo(PrivateRoutes);
