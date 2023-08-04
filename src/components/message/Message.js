import React from "react";
import "./message.scss";

const Message = ({ data }) => {
  const { firstName, lastName, email, text } = data;
  return (
    <div className="message">
      <div>Name: {firstName}</div>
      <div>Last name: {lastName}</div>
      <div className="email">Email: {email}</div>
      <div>Text: {text}</div>
      <p>Your message is sent.</p>
    </div>
  );
};

export default Message;
