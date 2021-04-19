import { combineReducers } from 'redux';
import commentReducer from './comment/comment.reducers';

const rootReducer = combineReducers({
    comment: commentReducer,

});

export default rootReducer;