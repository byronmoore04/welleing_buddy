import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";

// Component Imports
import ProtectedRoute from "components/ProtectedRoute/protectedRoute"

// Page import
import LoginPage from "../login/index.js"
import HomePage from "../home/index.js"

const App = () => {
  const location = useLocation();

  return (
    <main>
      <Switch key={location.pathname} location={location}>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/" component={HomePage} />
      </Switch>
    </main>
  );
}

export default App;
