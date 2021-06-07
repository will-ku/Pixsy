import React from "react";
import { MdClose } from "react-icons/md";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
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

  renderErrors() {
    return (
      <ul className="errors-ul">
        {this.props.errors.map((error, i) => (
          <li className="errors-li" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <h2>Create your account</h2>
          <h3>Registration is easy.</h3>
          <br />
          <div onClick={this.props.closeModal} className="close-x">
            <MdClose size={28} />
          </div>
          {this.renderErrors()}
          <div className="signup-form">
            <br />
            <label>
              <div className="signup-required-fields">
                <p>Email </p>
                <p className="asterisk">*</p>
              </div>
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              <div className="signup-required-fields">
                <p>First Name</p>
                <p className="asterisk">*</p>
              </div>
              <br />
              <input
                type="text"
                value={this.state.firstName}
                onChange={this.update("firstName")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              <div className="signup-required-fields">
                <p>Password </p>
                <p className="asterisk">*</p>
              </div>
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <button className="session-submit" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
