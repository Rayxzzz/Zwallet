const initialState = {
    data: [{balance : 10000}],
    message: null,
    loading: false,
    error: false
}


const FetchBalance = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_BALANCE_REQUEST':
            return { ...state, loading: true };
        case 'GET_BALANCE_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'GET_BALANCE_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'ADD_BALANCE_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'PUT_BALANCE_SUCCESS':
            return { ...state, loading: false, message: action.payload};
        default:
            return state;
    }

}

export default FetchBalance