
import {combineReducers} from 'redux';
import { listReducer } from './todoList'

const appReducer = combineReducers({
    listReducer
});
export default appReducer;