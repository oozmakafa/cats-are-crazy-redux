const initialState = {
    cats : {
        url: "",
        breeds: [],
        id: ""
    }
}

const CatDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_CAT_DETAIL": 
            return {
                // Is there a better way of doing this?
                ...state, cats:{
                    url: action.payload.data.url, 
                    breeds: action.payload.data.breeds[0], 
                    id: action.payload.data.id
                } 
            }
        default:
            return state;    
    }
}

export default CatDetailReducer;