import {combineReducers} from 'redux';
import heroes from './heroes/reducer'
import mundos from './mundos/reducer'

export default combineReducers({
    heroes,
    mundos
});