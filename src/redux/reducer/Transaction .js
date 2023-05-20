const initialState = {
    data: [
        {
        type : 'Transfer',
        name : 'David',
        photo : 'https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg',
        amount : 40000
        },
        {
            type : 'Transfer',
            name : 'Miles',
            photo : 'https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg',
            amount : 40000
        },
        {
            type : 'Transfer',
            name : 'Sarah',
            photo : 'https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg',
            amount : 40000
        },
    ],
    message: null,
    loading: false,
    error: false
}


const FetchTransaction = (state = initialState, action = {}) => {
    console.log(action.payload);
    switch (action.type) {
        case 'GET_HISTORY_LIST':
            return { ...state, loading: true };
        case 'ADD_TRANSACTION_SUCCESS':
            return {...state, loading : false, data : action.payload};
        default:
            return state;
    }

}

export default FetchTransaction