import React, { useEffect } from "react";
import { connect } from "react-redux";
import { showUserData } from "./actions/userActions";
import Loader from "./components/loader";
import "./App.css";
import { Row, Col } from "antd";
import UserCard from "./components/UserCard";

const App = ({ showUserData, users, loading }) => {
  useEffect(() => {
    showUserData();
  }, []);

  return loading ? (
    <Loader />
  ) : users.error ? (
    <h2>{users}</h2>
  ) : (
    <div className="container">
      <Row gutter={[16, 16]}>
        {users?.map((user) => (
          <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    loading: state.user.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUserData: () => dispatch(showUserData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
