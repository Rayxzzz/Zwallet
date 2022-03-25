import { combineReducers } from "redux";

/*reducers */
import profile from './Profile'
import balance from './Balance'
import notificationList from './NotificationList'

const rootReducers = combineReducers({
    profile,
    balance,
    notificationList,
})

export default rootReducers