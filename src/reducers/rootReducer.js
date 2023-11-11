import { combineReducers } from "redux";
import reducer from "./usersReducer";

const rootReducer = combineReducers({
  user: reducer,
});
export default rootReducer;
