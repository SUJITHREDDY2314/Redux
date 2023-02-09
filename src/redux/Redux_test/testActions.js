import { connect } from "react-redux";
import { FETCH_USERS, FETCH_SUCCES, FETCH_FAIL } from "./testTypes";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

export const fetchSucces = (data) => {
  return {
    type: FETCH_SUCCES,
    payload: data,
  };
};

export const fetchFail = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
};

export const fetchData = (dispatch) => {
  return (dispatch) => {
    dispatch(fetchUsers);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        const users = data;
        dispatch(fetchSucces(data));
      })
      .catch((error) => {
        const errMsg = error.status + " " + error.statusText;
        dispatch(fetchFail(errMsg));
      });
  };
};
