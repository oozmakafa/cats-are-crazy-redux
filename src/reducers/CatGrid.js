const initialState = {
    cats: [],
    length: 6
}

const CatGridReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_CAT_BY_BREED": 
            if(action.payload.config.params.breed_id !== ""){
                return {
                    ...state, cats: action.payload.data
                }
            }
            // Reset if selected breed is empty
            return {
                ...state, cats: [], length: 6
            }
        case "INCREMENT_GRID_LENGTH":
            return {
                ...state, length: state.length + 6
            }
        case "RESET_GRID_LENGTH": 
            return {
                ...state, length: 6
            }
        default:
            return state;    
    }
}

export default CatGridReducer;