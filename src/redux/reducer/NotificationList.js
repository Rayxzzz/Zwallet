const initialState = {
    data: [],
    message: 'test',
    loading: false,
    error: false
}


const FetchNotification = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_NOTIFICATION_REQUEST':
            return { ...state, loading: true };
        case 'GET_NOTIFICATION_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'GET_NOTIFICATION_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'PUT_NOTIFICATION_SUCCESS':
            return { ...state, loading: false, message: action.payload};
        default:
            return state;
    }

}

export default FetchNotification