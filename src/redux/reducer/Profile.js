const initialState = {
    data: [],
    message: null,
    loading: false,
    error: false
}


const FetchProfile = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_PROFILE_REQUEST':
            return { ...state, loading: true };
        case 'GET_PROFILE_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'GET_PROFILE_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'PUT_PROFILE_SUCCESS':
            return { ...state, loading: false, message: action.payload};
        default:
            return state;
    }

}

export default FetchProfile