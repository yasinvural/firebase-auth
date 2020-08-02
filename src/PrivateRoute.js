import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStateValue } from "./context/index";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useStateValue();
  const { isLoading, user } = state;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoading ? (
          user ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        ) : (
          <div>Loading . . . </div>
        )
      }
    />
  );
};

export default PrivateRoute;
