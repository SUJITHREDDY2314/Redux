import { FETCH_USERS, FETCH_SUCCES, FETCH_FAIL } from "./Redux_test/testTypes";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCES:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_FAIL:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
