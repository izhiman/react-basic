/**
 *
 * state处理函数
 *
 */

import {ADD, DELETE, INIT} from "./action-types";

// 多个状态组合暴露，便于store管理
import {combineReducers} from 'redux'

/**
 *reducer函数
 * @param state reducer固定的参数
 * @param action  reducer固定的参数
 */
// 形参默认值使state = 0


export function comments(state = [], action) {
    // 注意不能直接改变state
    switch (action.type) {
        case INIT:
            return action.data;
        case ADD:
            return [action.data, ...state];
        case DELETE:
            // Array.filter返回新数组，不改变老数组
            return state.filter((comment, index) => index !== action.data);
        default:
            return state;
    }
}


export function counter(state = 0, action) {
    /**
     * 省略其他代码
     */
    return state;
}

export default combineReducers(
    {
        counter: counter,
        comments: comments
    }
)

