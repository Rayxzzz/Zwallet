import { combineReducers } from "redux";

/*reducers */
import profile from './Profile'
import balance from './Balance'
import notificationList from './NotificationList'
import Transaction from './Transaction '

const rootReducers = combineReducers({
    profile,
    balance,
    notificationList,
    Transaction
})

export default rootReducers