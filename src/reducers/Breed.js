const initialState = {
    breed: [],
    selected: ""
}

const BreedReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_BREED": 
            return {
                ...state, breed: action.payload.data
            }
        case "SELECT_BREED": 
            return {
                ...state, selected: action.payload
            }
        case "RESELECT_BREED":
            return {
                ...state, selected: action.payload
            }    
        default:
            return state;    
    }
}

export default BreedReducer;