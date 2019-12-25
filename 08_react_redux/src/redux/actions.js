/**
 * action工厂，专门创建各种action
 */
import {INC, DEC} from "./action-types";

// 同步action返回对象
export const increment = (delta) => ({type: INC, data: delta});
export const decrement = (delta) => ({type: DEC, data: delta});

// 异步action返回函数
export const asyncInc = (delta) => {
    // 函数中才能执行异步代码，本质上中间件将分发的权利下放，等待定时任务结束后再分发，改变状态
    // 中间件给返回的函数传递了store.dispatch函数
    return (dispatch) => {
        setTimeout(
            () => dispatch(increment(delta)),
            1000
        );
    }
};
