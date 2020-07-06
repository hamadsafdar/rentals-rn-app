import { userConstants } from '../constants';

const initialState = {
  user: {},
  addresses: [],
  loading: false,
  isLoggedIn: false,
  error: [],
  oil: {
    loaded: false,
    items: [],
  },
  brand: {
    loaded: false,
    items: [],
  },
  mileage: {
    loaded: false,
    items: [],
  },
  grade: {
    loaded: false,
    items: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };
    case userConstants.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: [...state.error, action.payload.error],
      };
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: [...state.error, action.payload.error],
      };
    case userConstants.UPDATE_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case userConstants.UPDATE_SUCCESS:
      return {
        ...state,
      };
    case userConstants.UPDATE_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export { userReducer };
