export const CONTRACT_STAGE = {
    INIT: 'INIT',
    ERROR: 'ERROR',
    RESET: 'RESET',
    SUCCESS: 'SUCCESS',
  }
  
  export const contractConnect = () => {
    return {
      type: CONTRACT_STAGE.INIT,
    }
  }
  
  export const contractSuccess = (payload:any) => {
      return {
        type: CONTRACT_STAGE.SUCCESS,
        payload
      }
    }
  
  export const contractError = (payload:any) => {
    return {
      type: CONTRACT_STAGE.ERROR,
      payload: payload,
    }
  }
  
  export const contractReset = (payload:any) => {
    return {
      type: CONTRACT_STAGE.RESET,
      payload
    }
  }
  