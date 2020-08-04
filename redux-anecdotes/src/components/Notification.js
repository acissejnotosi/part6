import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { show } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  const showNotification = () => {
    dispatch(show("ola"));
  };

  return <div style={style}>{notification}</div>;
};

export default Notification;
