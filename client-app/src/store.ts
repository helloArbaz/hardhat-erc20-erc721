import { createStore,combineReducers } from 'redux';
import counter from "./reducer/counter"
import contract from "./reducer/contract.reducer"
import metaMastConnection from "./reducer/metaMast.connection.reducer"


let comboReducer = combineReducers({
    counter,
    contract,
    metaMask:metaMastConnection
})
export const store = createStore(comboReducer)