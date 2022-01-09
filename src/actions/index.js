import { api } from "../api";
import { ADMIN_REGISTER, CHANGE_BUTTON } from "./const";

export const changeButton = val => async dispatch => {
    dispatch({
      type : CHANGE_BUTTON,
      payload : {value : val}
    });
  };

  export const AdminRegisterLogin = (userName , Password, cb) => async dispatch => {

    try {

    
    const response = await api.post('/admin/register' , {
      Email : userName,
      Password 
    })


    dispatch({
      type : ADMIN_REGISTER,
      payload : response.data
    })
cb();
  }catch (e){


  }

  }