import React from "react";
import { auth } from "../firebase/index";

import { useStateValue } from "../context/index";

const Home = () => {
  const { state } = useStateValue();
  const { user } = state;

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <>
      <h2>Welcome {user && user.email}</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
};

export { Home };
