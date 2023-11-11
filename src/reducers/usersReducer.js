import {
  SHOW_USERS,
  SHOW_USERS_SUCCESS,
  SHOW_USERS_FAILURE,
  UPDATE_USER,
  DELETE_USER,
  LIKE_USER,
} from "../actions/userType";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_USERS:
      return {
        ...state,
        users: [],
        loading: true,
        error: "",
      };
    case SHOW_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case SHOW_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          }
          return user;
        }),
        error: "",
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => {
          if (user.id === action.payload) {
            return false;
          }
          return true;
        }),
        error: "",
      };
    case LIKE_USER:
      const likedUserId = action.payload;

      return {
        ...state,
        loading: false,
        users: state.users.map((user) => {
          if (user.id === likedUserId) {
            user.isLiked = user.isLiked === undefined ? true : !user.isLiked;
          }
          return user;
        }),
      };

    default:
      return state;
  }
};
export default reducer;
