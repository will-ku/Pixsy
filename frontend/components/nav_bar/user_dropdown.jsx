import React from "react";
import { Link } from "react-router-dom";
import { MdPerson, MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { receiveCurrentUser } from "../../actions/session_actions";

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    this.setState({ showMenu: true });
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  componentDidUpdate() {
    const { showMenu } = this.state;

    setTimeout(() => {
      if (showMenu) {
        window.addEventListener("click", this.closeMenu);
      } else {
        window.removeEventListener("click", this.closeMenu);
      }
    }, 0);
  }

  render() {
    return (
      <div id="user-drop-id" className="user-drop-container">
        <button onClick={this.showMenu} className="user-drop-btn">
          <div id="user-drop-btn-wrapper">
            <MdPerson size={20} />
          </div>
          <div>
            <TiArrowSortedDown />
          </div>
        </button>

        {this.state.showMenu ? (
          <div className="user-drop-content">
            <button id="current-user-drop">
              Hi {this.props.currentUser.firstName}!
            </button>
            {/* <button>User Details</button> */}
            <button onClick={this.props.logout}>Logout</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default UserDropdown;
