import React, { useState } from "react";
import ReactDom from "react-dom";
import Form from "../form/Form";
import Message from "../message/Message";
import "./modal.scss";

const Modal = ({ closeModal }) => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [data, setData] = useState({});

  const setMessage = (dataMessage) => {
    setData(dataMessage);
    setIsMessageOpen(true);
    const timer = setTimeout(() => closeModal(), 3000);
    return () => clearTimeout(timer);
  };

  return ReactDom.createPortal(
    <>
      <div className={"overlay"} />
      <div className={"modal"}>
        {isMessageOpen ? (
          <Message data={data} />
        ) : (
          <Form closeModal={closeModal} setMessage={setMessage} />
        )}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
