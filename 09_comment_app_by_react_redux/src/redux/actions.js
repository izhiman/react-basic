/**
 * actions工厂函数
 */
import {INIT, ADD, DELETE} from "./action-types";

export const addComment = (comment) => ({type: ADD, data: comment});
export const deleteComment = (index) => ({type: DELETE, data: index});
export const asyncGetComments = () => {
    return (dispatch) => {
        setTimeout(() => {
            const initComments = [
                {
                    username: 'Pony Ma',
                    content: 'React 很好'
                },
                {
                    username: 'JackMa',
                    content: 'React 很简单'
                }
            ];
            dispatch({type: INIT, data: initComments});
        }, 1000);
    }
};
