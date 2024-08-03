/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';
import { produce } from 'immer';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.LOGOUT_USER_START:
      // return {
      //   ...state,
      //   logout: { ...state.logout, loading: true }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.logout.loading = true;
      });
    case userActionTypes.LOGOUT_USER_SUCCESS:
      localStorage.clear();
      // return {
      //   ...state,
      //   token: undefined,
      //   profile: undefined,
      //   logout: { ...state.logout, error: '', message: payload.message }
      // };
      return produce(state, (draft) => {
        draft.token = undefined;
        draft.profile = undefined;
        draft.loading = false;
        draft.logout.loading = false;
        draft.logout.error = '';
        draft.logout.message = payload.message;
      });
    case userActionTypes.LOGOUT_USER_FAILURE:
      localStorage.clear();
      // return {
      //   ...state,
      //   logout: { ...state.logout, error: payload, message: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = false
        draft.logout.loading = false
        draft.logout.error = payload.error
      })
    case userActionTypes.LOGOUT_USER_END:
      // return {
      //   ...state,
      //   logout: { ...state.logout, loading: false }
      // };
      return produce(state, (draft) => {
        draft.loading = false
        draft.logout.loading = false;
      })
    default:
      return null;
  }
};
