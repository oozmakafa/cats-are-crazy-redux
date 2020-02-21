import BreedReducer from './Breed';
import CatGridReducer from './CatGrid';
import CatDetailReducer from './CatDetail';
import {combineReducers} from 'redux';


const combineReducer = combineReducers({breed: BreedReducer, catgrid: CatGridReducer, catdetail: CatDetailReducer});

export default combineReducer;