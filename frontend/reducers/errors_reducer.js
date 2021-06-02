import { combineReducers } from "redux";

import sessionsReducer from "./session_errors_reducer";

export default combineReducers({
  session: sessionsReducer,
});
