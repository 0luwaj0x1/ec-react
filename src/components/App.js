import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from './Sidebar'
import QuestionOne from './QuestionOne'

function App() {
  return (
    <div className="container">
      <Router>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
            <Route path='/question-one' component={QuestionOne} />
        </div>
      </Router>
    </div>
  );
}

export default App;
