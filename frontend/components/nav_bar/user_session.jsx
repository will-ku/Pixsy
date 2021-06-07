import React from "react";
import UserDropdown from "./user_dropdown";

class UserSession extends React.Component {
  constructor(props) {
    super(props);
    this.loginLink = this.loginLink.bind(this);
    this.dropdownMenu = this.dropdownMenu.bind(this);
  }

  loginLink() {
    return (
      <nav className="sign-in">
        <button onClick={() => this.props.openModal("login")}>Sign in</button>
      </nav>
    );
  }

  dropdownMenu() {
    const { currentUser, logout } = this.props;
    return (
      <UserDropdown currentUser={currentUser} logout={logout}></UserDropdown>
    );
  }

  render() {
    return this.props.currentUser ? this.dropdownMenu() : this.loginLink();
  }
}

export default UserSession;
