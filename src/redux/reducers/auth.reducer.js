import { AUTH_FAILURE, AUTH_SUCCESS, SET_LOADING } from "../actionTypes";

const initialState = {
  loading: false,
  user: null,
  isLoggedIn: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case AUTH_FAILURE:
      return { ...state, loading: false };
    case AUTH_SUCCESS:
      return { ...state, loading: false, user: payload.user, isLoggedIn: true };
    default:
      return { ...state };
  }
}
