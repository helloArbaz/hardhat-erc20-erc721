export const META_MASK_STAGE = {
  CONNECTED: 'META_MASK_CONNECTED',
  ERROR: 'META_MASK_ERROR',
  RESET: 'META_MASK_RESET',
  SUCCESS: 'META_MASK_SUCCESS',
}

export const metaMaskConnect = () => {
  return {
    type: META_MASK_STAGE.CONNECTED,
  }
}

export const metaMaskSuccess = (payload:any) => {
    debugger;
    return {
      type: META_MASK_STAGE.SUCCESS,
      payload
    }
  }

export const metaMaskError = (payload:any) => {
  return {
    type: META_MASK_STAGE.ERROR,
    payload: payload,
  }
}

export const metaMaskReset = (payload:any) => {
  return {
    type: META_MASK_STAGE.RESET,
    payload
  }
}
