const initState = {
    isLoad:false,
    getContact:[],
    getContactById:[],
}

const getContactReducer = (state = initState, action) => {
    switch(action.type){
        case 'GET_CONTACT_SUCCESS':
            return {
                ...state,
                isLoad:false,
                getContact: action.data,
            };
        case 'GET_CONTACT_BY_ID':
            return {
                ...state,
                isLoad:false,
                getContactById: action.data,
            };
        default: 
            return state;
    }
}
export default getContactReducer;
