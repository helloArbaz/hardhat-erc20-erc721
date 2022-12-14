import { CONTRACT_STAGE } from '../actions/contract.load'

let defaultState = {
}

export default function contract(state = defaultState, action?: any) {
  switch (action.type) {
    case CONTRACT_STAGE.SUCCESS:
      return {
        ...state,
        ...action.payload,
        ...{ isConnected: true, init: false },
      }
    case CONTRACT_STAGE.INIT:
      return { ...state, ...{ init: true } }
    case CONTRACT_STAGE.ERROR:
      return { ...state, error: action.payload }
    case CONTRACT_STAGE.RESET:
      return { isConnected: false, error: {} }
    default:
      return state
  }
}
