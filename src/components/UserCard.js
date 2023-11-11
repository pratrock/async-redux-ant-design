import React, { useState } from "react";
import { connect } from "react-redux";
import "./UserCard.css";
import {
  EditOutlined,
  DeleteOutlined,
  HeartTwoTone,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Card, Col } from "antd";
import ModalComponent from "./modalComponent";
import { deleteUser, likeUser } from "../actions/userActions";

const { Meta } = Card;
const UserCard = ({ user, dispatch }) => {
  const [open, setOpen] = useState(false);
  const [dummyState, setDummyState] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const deleteTheUser = (id) => {
    dispatch(deleteUser(id));
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const likeHandler = (id) => {
    dispatch(likeUser(id));
    setDummyState(Math.random());
  };

  const heartIcon = user.isLiked ? (
    <HeartFilled
      key={"like"}
      style={{
        color: "rgb(255, 0, 0)",
      }}
      onClick={() => likeHandler(user.id)}
    />
  ) : (
    <HeartTwoTone
      key="like"
      twoToneColor="rgb(255, 0, 0)"
      onClick={() => likeHandler(user.id)}
    />
  );

  return (
    <>
      <ModalComponent
        handleCancel={handleCancel}
        closeIcon={false}
        open={open}
        confirmLoading={confirmLoading}
        setConfirmLoading={setConfirmLoading}
        user={user}
      />

      <Card
        style={{
          width: 300,
        }}
        cover={<img alt="avatar" src="https://api.dicebear.com/avatar.svg" />}
        actions={[
          heartIcon,
          <EditOutlined key="edit" onClick={showModal} />,
          <DeleteOutlined
            key="delete"
            onClick={() => deleteTheUser(user.id)}
          />,
        ]}
      >
        <Meta title={user.name} />

        <Col>
          {" "}
          <MailOutlined
            style={{
              paddingRight: 8,
            }}
          />{" "}
          {user.email}
        </Col>
        <Col>
          {" "}
          <PhoneOutlined
            style={{
              paddingRight: 8,
            }}
          />{" "}
          {user.phone}
        </Col>
        <Col>
          <GlobalOutlined
            style={{
              paddingRight: 8,
            }}
          />
          <span>{user.website}</span>
        </Col>
      </Card>
    </>
  );
};

export default connect(null)(UserCard);
