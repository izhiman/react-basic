// 初始状态来自 reducers： counter 得到初始state的值
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from "./reducers";

// 以下两种导出方式等价
// const store = createStore(
//     counter,
//     //应用异步中间件
//     applyMiddleware(thunk)
// );
//
// export default store;


export default createStore(
    counter,
    //应用异步中间件
    // applyMiddleware(thunk)

    //应用异步中间件和调试工具
    composeWithDevTools(applyMiddleware(thunk))
);

