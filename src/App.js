import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import People from "./Components/People";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          name: "Jarid",
          email: "jarid@gmail.com",
          jobTitle: "Application Developer"
        },
        { name: "Aaron", email: "aaron@gmail.com", jobTitle: "Jr Web Dev" },
        {
          name: "Joe",
          email: "joedaddy@hotmail.com",
          jobTitle: "Coding Instructor"
        },
        { name: "Jacob", email: "jdub@aol.com", jobTitle: "Janitor" }
      ],
      userInput: ""
    };
  }

  render() {
    let studentList = this.state.students.map((student, index) => {
      return (
        <div className="App">
          <People student={student} key={index} />
        </div>
      );
    });
    return <div>{studentList}</div>;
  }
}

export default App;
