import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Study = (props) => (
  <tr>
    <td>{props.studyLog.username}</td>
    <td>{props.studyLog.description}</td>
    <td>{props.studyLog.duration}</td>
    <td>{props.studyLog.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.studyLog._id}>edit</Link> |
      <a
        href="#"
        onClick={() => {
          props.deleteLog(props.studyLog._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

class StudyLogList extends Component {
  constructor(props) {
    super(props);

    this.deleteStudyLog = this.deleteStudyLog.bind(this);
    this.studyLogList = this.studyLogList.bind(this);
    this.state = {
      studyLogs: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/studyLog/")
      .then((res) => {
        this.setState({ studyLogs: res.data });
        console.log("fetching on Component Did mount for study log list");
        console.log(res.data, "this is data");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteStudyLog(id) {
    axios
      .delete("http://localhost:5000/studyLog/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      studyLogs: this.state.studyLogs.filter((el) => el._id !== id),
    });
  }

  studyLogList() {
    return this.state.studyLogs.map((Log) => {
      return (
        <Study studyLog={Log} deleteLog={this.deleteStudyLog} key={Log._id} />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Study Sessions</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>{this.studyLogList()}</tbody>
        </table>
      </div>
    );
  }
}

export default StudyLogList;
