/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';

export default (payload = {}) => dispatch => dispatch(apiAction({
  method: 'post',
  url: `${REACT_APP_BASIC_URL}/logout`,
  data: { ...payload },
  onStart: userActionTypes.LOGOUT_USER_START,
  onEnd: userActionTypes.LOGOUT_USER_END,
  onSuccess: userActionTypes.LOGOUT_USER_SUCCESS,
  onFailure: userActionTypes.LOGOUT_USER_FAILURE
}));
