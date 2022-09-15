export default function counter(state = 0, action?:any) {
  console.log("sdf",action);
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }