/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.SIGNUP_USER_START:
      return {
        ...state,
        loading: true,
        signup: { ...state.signup, message: '', loading: true, errors: '' }
      };
    case userActionTypes.SIGNUP_USER_SUCCESS:
      // console.log("Signup State", payload)
      // localStorage.user = JSON.stringify(payload.user);
      // localStorage.token = payload.token;
      return {
        ...state,
        loading: false,
        message: payload.message,
        token: {...payload.token},
        signup: { loading: false, message: payload.message, errors: '' },
        profile: {...payload.user}
      };
    case userActionTypes.SIGNUP_USER_FAILURE:
      return {
        ...state,
        loading: false,
        signup: { loading: false, message: '', errors: payload.error },
        errors: payload.error
      };
    case userActionTypes.SIGNUP_USER_END:
      return {
        ...state,
        loading: false,
        message: payload.message,
        signup: { ...state.signup, loading: false },
        profile: { ...state.profile },
        errors: {...state.errors}
      };
    default:
      return null;
  }
};
