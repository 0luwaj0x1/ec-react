import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import Home from "./Home";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/question-one" component={QuestionOne} />
          <Route path="/question-two" component={QuestionTwo} />
          <Route path="/question-three" component={QuestionThree} />
          <Route path="/question-four" component={QuestionFour} />
        </div>
      </Router>
    </div>
  );
}

export default App;
