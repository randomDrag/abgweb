
import { ADMIN_REGISTER } from "../actions/const";

export default(state = {}, action) => {

    switch (action.type) {

        case ADMIN_REGISTER :

       

            return action.payload.value 





        default:
            return state;

    }

}
