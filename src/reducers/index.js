import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import AdminRegister from "./getAdminRegister";
import AdminSec from "./AdminSec";
export default combineReducers({
  from: formReducer,
  AdminSec,
  AdminRegister
});
