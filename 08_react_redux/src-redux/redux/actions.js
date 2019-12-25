/**
 * action工厂，专门创建各种action
 */
import {INC, DEC} from "./action-types";

export const increment = (delta) => ({type: INC, data: delta});
export const decrement = (delta) => ({type: DEC, data: delta});
