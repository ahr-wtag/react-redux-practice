import {combineReducers} from 'redux';
import todoReducer from './todoRecuder';

const rootReducers = combineReducers({todo: todoReducer});

export default rootReducers;