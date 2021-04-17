import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BootcampsPage from "./pages/BootcampsPage";

const App = () => {
  return (
    <>
      {/* Navabar */}
      <Router>
        <Switch>
          <Route exact path="/" component={BootcampsPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
