import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import StudyLogList from "./components/studyLogList";
import EditStudyLog from "./components/editStudyLog";
import CreateStudyLog from "./components/createStudyLog";
import CreateUser from "./components/createUser";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={StudyLogList} />
        <Route path="/edit/:id" component={EditStudyLog} />
        <Route path="/create" component={CreateStudyLog} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
