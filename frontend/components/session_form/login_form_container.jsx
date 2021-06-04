import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: "login",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button
      type="button"
      className="register-button"
      onClick={(e) => {
        e.preventDefault();
        dispatch(openModal("signup"));
      }}
    >
      Register
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
