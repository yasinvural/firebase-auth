import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/index";
import { initialState, reducer } from "./reducer/index";
import PrivateRoute from "./PrivateRoute";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { auth } from "./firebase/index";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          payload: user,
        });
        dispatch({
          type: "SET_ISLOADING",
          payload: false,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
        dispatch({
          type: "SET_ISLOADING",
          payload: false,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
