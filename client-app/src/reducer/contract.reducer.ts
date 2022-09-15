let defaultState = {
  giggleToken: 0,
}

export default function contractReducer(state = defaultState, action?:any) {
  console.log(state.giggleToken,'state.giggleToken')
  switch (action.type) {
    case 'increment':
      return state.giggleToken + 1
    default:
      return state
  }
}
