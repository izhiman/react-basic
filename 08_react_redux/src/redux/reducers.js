/**
 *包含多个reducer函数的模块
 */
import {INC, DEC} from './action-types'

/**
 *reducer函数
 * @param state reducer固定的参数
 * @param action  reducer固定的参数
 */
// 形参默认值使state = 0
export function counter(state = 0, action) {
    console.log(`state = ${state}; action = ${action}`);
    switch (action.type) {
        case INC:
            return state + action.data;
        case DEC:
            return state - action.data;
        default:
            return state;
    }
}

