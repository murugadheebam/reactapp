
import { Types } from '../constants/actionTypes';

const initialState = {
  formSubmitted: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false
      }
    default:
      return state;
  }
}

export default reducer;