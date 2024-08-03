/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';
import { produce } from 'immer'

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.SIGNUP_USER_START:
      // return {
      //   ...state,
      //   loading: true,
      //   signup: { ...state.signup, message: '', loading: true, error: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = true
        draft.signup.loading = true
        draft.signup.message = ''
        draft.signup.error = ''
      })
    case userActionTypes.SIGNUP_USER_SUCCESS:
      // console.log("Signup State", payload)
      // localStorage.user = JSON.stringify(payload.user);
      localStorage.token = payload.token;
      // return {
      //   ...state,
      //   loading: false,
      //   message: payload.message,
      //   token: {...payload.token},
      //   signup: { loading: false, message: payload.message, error: '' },
      //   profile: {...payload.user}
      // };
      console.log("SUCCESS payload", payload)
      return produce(state, (draft) => {
        draft.loading = false
        draft.message = payload.message
        draft.token = payload.token
        draft.signup.loading = false
        draft.signup.message = payload.message
        draft.signup.error = ''
      })
    case userActionTypes.SIGNUP_USER_FAILURE:
      // return {
      //   ...state,
      //   loading: false,
      //   signup: { loading: false, message: '', error: payload.error },
      //   error: payload.error
      // };
      console.log("FAILURE payload", payload)
      return produce(state, (draft) => {
        draft.loading = false
        draft.signup.loading = false
        draft.signup.message = ''
        draft.signup.error = payload.error
      })
    case userActionTypes.SIGNUP_USER_END:
      // return {
      //   ...state,
      //   loading: false,
      //   message: payload.message,
      //   signup: { ...state.signup, loading: false },
      //   profile: { ...state.profile },
      //   error: {...state.error}
      // };
      return produce(state, (draft) => {
        draft.loading = false
        draft.signup.loading = false
      })
    default:
      return null;
  }
};
