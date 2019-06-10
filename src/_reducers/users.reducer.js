import { userConstants } from "../_constants";

export function users(state = {}, action) {
  //console.log("users");

  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
