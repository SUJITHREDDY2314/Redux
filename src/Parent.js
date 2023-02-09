import React, { useEffect } from "react";
import Child from "./Child";
import store from "./redux/store";
import { fetchData } from "./redux/Redux_test/testActions";
import { connect } from "react-redux";

function Parent({ userData, error, fetchData }) {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      I am Parent
      <Child dataToPass={userData} errorPassed={error} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.data,
    error: state.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Parent);
