import React from "react";

const UserSessionNav = ({ currentUser, logout, openModal }) => {
  const loginLink = () => (
    <nav className="sign-in">
      <button onClick={() => openModal("login")}>Sign in</button>
    </nav>
  );
  const userSessionNavMenu = () => (
    <div className="user-nav-global">
      <div className="user-nav-menu">
        <button className="header-button" onClick={logout}>
          Log Out
        </button>

        <nav className="navbar">
          <ul className="navbar-nav"></ul>
        </nav>
      </div>
    </div>
  );

  return currentUser ? userSessionNavMenu(currentUser, logout) : loginLink();
};

export default UserSessionNav;

/*



*/
