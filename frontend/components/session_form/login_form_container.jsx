import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: "login",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal("signup"))}>Register</button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
