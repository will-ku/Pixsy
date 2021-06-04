import { connect } from "react-redux";
import React from "react";
import { signup } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SignupForm from "./signup_form";

import SessionForm from "./login_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(openModal("login"));
        }}
      >
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
