import { READ, UNREAD } from './comment.types';

export const commentRead = () => {
    return {
        type: READ,
    };
};

export const commentUnread = () => {
    return {
        type: UNREAD,
    };
};