import { combineReducers } from "redux";

/*reducers */
import profile from './Profile'
import balance from './Balance'


const rootReducers = combineReducers({
    profile,
    balance,
})

export default rootReducers