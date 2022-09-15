import { createStore,combineReducers } from 'redux';
import counter from "./reducer/counter"
import contract from "./reducer/contract.reducer"


let comboReducer = combineReducers({
    counter,
    contract
})
export const store = createStore(comboReducer)