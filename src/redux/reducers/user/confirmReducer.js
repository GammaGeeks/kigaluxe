/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';
import { produce } from 'immer'

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.CONFIRM_USER_START:
      // return {
      //   ...state,
      //   confirm: { ...state.confirm, message: '', loading: true, errors: '' }
      // };
      return produce(state, draft => {
        draft.loading = true;
        draft.confirm.loading = true;
        draft.confirm.message = '';
        draft.confirm.errors = '';
      })
    case userActionTypes.CONFIRM_USER_SUCCESS:
      // localStorage.user = JSON.stringify(payload.data.userData);
      // localStorage.token = payload.token;
      // return {
      //   ...state,
      //   token: {...payload.data.token},
      //   loading: false,
      //   message: payload.message,
      //   confirm: { loading: false, message: payload.message, errors: '' },
      //   profile: {...payload.data.userData}
      // };
      return produce(state, draft => {
        draft.loading = false;
        draft.message = payload.message;
        draft.token = payload.token;
        draft.confirm.loading = false;
        draft.confirm.message = payload.message;
        draft.confirm.error = '';
        // draft.profile = payload.data.userData;
      })
    case userActionTypes.CONFIRM_USER_FAILURE:
      // return {
      //   ...state,
      //   confirm: { loading: false, message: '', errors: payload.error }
      // };
      return produce(state, draft => {
        draft.loading = false;
        draft.confirm.loading = false;
        draft.confirm.message = '';
        draft.confirm.error = payload.error;
      })
    case userActionTypes.CONFIRM_USER_END:
      // return {
      //   ...state,
      //   confirm: { ...state.confirm, loading: false },
      //   profile: { ...state.profile }
      // };
      return produce(state, draft => {
        draft.loading = false;
        draft.confirm.loading = false;
      })
    default:
      return null;
  }
};
