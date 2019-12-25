// 初始状态来自 reducers： counter 得到初始state的值
import {createStore} from "redux";
import {counter} from "./reducers";

const store = createStore(counter);

export default store;
