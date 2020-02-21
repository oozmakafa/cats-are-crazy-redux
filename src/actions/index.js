import axios from 'axios';
// Fetch ang list sa breed
export const FETCH_BREED = () => dispatch => {
    return axios.get(`https://api.thecatapi.com/v1/breeds`)
        .then(res => dispatch({
            type: "FETCH_BREED",
            payload: res
        }));
}
// If kung ang user naka pili na sa iyang breed sa iring
export const SELECT_BREED = (props) => {
    return {
        type: "SELECT_BREED",
        payload: props.target.value
    }
}

// Di ko sure if naa pay mas better way ani, pero kini siya ma trigger after e click ni user ang back button para e reselect tong unsa tong last nga breed iyang gi tan-aw
export const RESELECT_BREED = (selected) => {
    return {
        type: "RESELECT_BREED",
        payload: selected
    }
}
// Reset Cat Grid Length
export const RESET_GRID_LENGTH = (GRID_LENGTH) => {
    return {
        type: "RESET_GRID_LENGTH",
        payload: GRID_LENGTH
    }
}

// Fetch ang cat depende sa breed na iyang na  pilian
export const FETCH_CAT_BY_BREED = (id) => dispatch => {
    return  axios.get(`https://api.thecatapi.com/v1/images/search`, {
        params: {
            breed_id: id,
            limit: 100
        }
        }).then(res => dispatch({
            type: "FETCH_CAT_BY_BREED",
            payload: res
    }));
}
// E increment ang length sa page if there's more results from the api
export const INCREMENT_GRID_LENGTH = (grid_length) => {
    return {
        type: "INCREMENT_GRID_LENGTH",
        payload: grid_length
    }
}
// Kuhaa ang detalye sa iring
export const FETCH_CAT_DETAIL = (id) => dispatch => {
    return  axios.get(`https://api.thecatapi.com/v1/images/${id}`)
        .then(res => dispatch(
            {
                type: "FETCH_CAT_DETAIL",
                payload: res
            }
        ));
}