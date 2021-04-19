import { READ, UNREAD } from './comment.types';

const INITIAL_STATE = {
    read: false,
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case READ:
            return {
                ...state, read: state.read,
            };
        case UNREAD:
            return {
                ...state, read: state.read,
            };
        default: return state;
    }
};

export default reducer;