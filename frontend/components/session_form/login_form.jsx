import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: "guest@abc.com",
      password: "abc123",
    };
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form-header">
            <h1>Sign in</h1>
            {this.props.otherForm}
          </div>
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              <p>Email address</p>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />

            <button
              className="demo-submit"
              type="submit"
              onClick={this.handleDemoSubmit}
            >
              Demo Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
