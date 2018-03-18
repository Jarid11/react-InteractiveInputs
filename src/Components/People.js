import React, { Component } from "react";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.student.name,
      email: this.props.student.email,
      jobTitle: this.props.student.jobTitle,
      nameInput: "",
      emailInput: "",
      jobInput: ""
    };
    this.changeNameInputs = this.changeNameInputs.bind(this);
    this.changeEmailInputs = this.changeEmailInputs.bind(this);
    this.changeJobInputs = this.changeJobInputs.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleJobtitle = this.handleJobtitle.bind(this);
  }

  changeNameInputs(val) {
    if (val === "") {
      alert("Enter name in Input field");
    }
    this.setState({
      nameInput: val
    });
  }

  changeEmailInputs(val) {
    if (val === "") {
      alert("Enter name in Input field");
    }
    this.setState({
      emailInput: val
    });
  }

  changeJobInputs(val) {
    if (val === "") {
      alert("Enter name in Input field");
    }
    this.setState({
      jobInput: val
    });
  }

  handleName() {
    this.setState({
      name: this.state.nameInput
    });
  }

  handleEmail() {
    this.setState({
      email: this.state.emailInput
    });
  }

  handleJobtitle() {
    this.setState({
      jobTitle: this.state.jobInput
    });
  }

  render() {
    return (
      <div>
        <p>
          My name is {this.state.name}, My email is {this.state.email} and I am
          a {this.state.jobTitle}.
        </p>
        <input
          type="text"
          placeholder="Type New Name.."
          onChange={ele => this.changeNameInputs(ele.target.value)}
        />
        <button onClick={() => this.handleName()}>Change Name</button>
        <input
          type="text"
          placeholder="Type New Email.."
          onChange={ele => this.changeEmailInputs(ele.target.value)}
        />
        <button onClick={() => this.handleEmail()}>Change Email</button>
        <input
          type="text"
          placeholder="Type New Job.."
          onChange={ele => this.changeJobInputs(ele.target.value)}
        />
        <button onClick={() => this.handleJobtitle()}>Change Job</button>
      </div>
    );
  }
}

export default People;
