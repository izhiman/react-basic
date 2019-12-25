// 使用了redux API的组件称为容器组件
import {connect} from "react-redux";
import {decrement, increment, asyncInc} from "../redux/actions";
import Counter from '../components/counter'

export default connect(
    state => ({count: state}),
    {increment, decrement, asyncInc}
)(Counter);
