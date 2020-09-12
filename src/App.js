import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Example from "pages/Example";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/properties/:id" component={DetailsPage}></Route>
      </Router>
    </div>
  );
}

export default App;
