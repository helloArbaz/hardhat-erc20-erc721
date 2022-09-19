import { META_MASK_STAGE } from '../actions/metaMask.action'

let defaultState = {
  isConnected: false,
  error: {},
}

export default function metaMastConnection(state = defaultState, action?: any) {
    debugger;
  switch (action.type) {
    case META_MASK_STAGE.SUCCESS:
      return {
        ...state,
        ...action.payload,
        ...{ isConnected: true, init: false },
      }
    case META_MASK_STAGE.CONNECTED:
      return { ...state, ...{ init: true } }
    case META_MASK_STAGE.ERROR:
      return { ...state, error: action.payload }
    case META_MASK_STAGE.RESET:
      return { isConnected: false, error: {} }
    default:
      return state
  }
}
