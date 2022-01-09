
import { CHANGE_BUTTON, IS_LOGOUT, LOGIN_USER } from "../actions/const";

export default(state = {Value : 1}, action) => {

    switch (action.type) {

        case CHANGE_BUTTON:

       

            return { Value : action.payload.value}





        default:
            return state;

    }

}
