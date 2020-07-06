import { userConstants } from '../constants';

const authenticate = credintials => {
  // Actions for displaying alerts
  const request = () => ({
    type: userConstants.LOGIN_REQUEST,
  });
  const success = user => ({
    type: userConstants.LOGIN_SUCCESS,
    payload: user,
  });
  const failure = () => ({
    type: userConstants.LOGIN_FAILURE,
  });
};

const register = user => {
  const request = () => ({ type: userConstants.SIGN_UP_REQUEST });
  const success = user => ({
    type: userConstants.SIGN_UP_SUCCESS,
    payload: user,
  });
  const failure = () => ({
    type: userConstants.SIGN_UP_FAILURE,
  });
};

const edit = newOps => {
  const request = () => ({ type: userConstants.UPDATE_REQUEST });
  const success = user => ({
    type: userConstants.UPDATE_SUCCESS,
    payload: user,
  });
  const failure = error => ({
    type: userConstants.UPDATE_FAILURE,
    payload: error,
  });
};

const logOut = () => {};

export const userActions = {
  authenticate,
  logOut,
  register,
  edit,
};
