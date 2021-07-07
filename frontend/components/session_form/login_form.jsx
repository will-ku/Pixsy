import React from "react";
import { MdClose } from "react-icons/md";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
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
    // .then(this.props.fetchAllCartItems(this.props.currentUser.id))
  }

  demoUser(e) {
    e.preventDefault();
    this.props
      .processForm({
        email: "spiderman@pixsy.com",
        password: "abc123",
      })
      .then(this.props.closeModal);
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form-header">
            <h1>Sign in</h1>
            {this.props.otherForm}
          </div>
          <div onClick={this.props.closeModal} className="close-x">
            <MdClose size={28} />
          </div>
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              Email address
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
              Password
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <button className="session-submit" type="submit" value="submit">
              Sign in
            </button>

            <button className="demo-submit" onClick={(e) => this.demoUser(e)}>
              Demo Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
