import React from "react";

const UserSessionNav = ({ currentUser, logout, openModal }) => {
  const loginLink = () => (
    <nav className="login-signup">
      <button onClick={() => openModal("login")}>Sign in</button>
    </nav>
  );
  const userSessionNavMenu = () => (
    <div className="header-group">
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </div>
  );

  return currentUser ? userSessionNavMenu(currentUser, logout) : loginLink();
};

export default UserSessionNav;
