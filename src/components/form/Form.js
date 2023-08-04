import React, { useState } from "react";
import InputField from "../inputField/InputField";
import Button from "../button/Button";
import "./form.scss";

const Form = ({ closeModal, setMessage }) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [info, setInfo] = useState({
    firstName: {
      value: "",
      valid: true,
      errorTypes: ["required"],
    },
    lastName: {
      value: "",
      valid: true,
      errorTypes: ["required"],
    },
    email: {
      value: "",
      valid: true,
      errorTypes: ["required", "email"],
    },
    text: {
      value: "",
      valid: true,
      errorTypes: ["required"],
    },
    
  });

  const { firstName, lastName, email, text } = info;

  const isValid = (value, errorTypes) => {
    let errorText = [];
    errorTypes.forEach((item) => {
      if (item === "required" && value.length === 0) {
        errorText = [...errorText, "This field is required"];
      } else if (
        item === "email" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ) {
        errorText = [...errorText, "Invalid email address"];
      }
    });

    return {
      valid: !!!errorText[0],
      errorText: errorText[0],
    };
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...info };
    const { valid, errorText } = isValid(value, info[name]["errorTypes"]);
    newState[name] = {
      ...newState[name],
      value,
      valid,
      errorText,
    };
    setInfo(newState);
    setIsBtnDisabled(handleIsBtnDisabled(newState));
  };

  const handleIsBtnDisabled = (state) => {
    let allFieldValidation = [];
    for (const item in state) {
      allFieldValidation = [
        ...allFieldValidation,
        isValid(state[item]["value"], state[item]["errorTypes"])["valid"],
      ];
    }
    return allFieldValidation.some((element) => element === false);
  };

  const submitModal = () => {
    let modalText = {};
    for (const item in info) {
      modalText[item] = info[item]["value"];
    }
    setMessage(modalText);
  };

  return (
    <div className="form">
      <div className="header">
        <button className="modal-close" onClick={closeModal}>X</button>
      </div>
      <InputField
        name={"firstName"}
        value={firstName.value}
        valid={firstName.valid}
        errorText={firstName.errorText}
        label={"First name"}
        mandatory
        onChange={handleOnChange}
        onBlur={handleOnChange}
      />
      <InputField
        name={"lastName"}
        value={lastName.value}
        valid={lastName.valid}
        errorText={lastName.errorText}
        label={"Last name"}
        mandatory
        onChange={handleOnChange}
        onBlur={handleOnChange}
      />
      <InputField
        name={"email"}
        value={email.value}
        valid={email.valid}
        errorText={email.errorText}
        label={"Email addres"}
        mandatory
        onChange={handleOnChange}
        onBlur={handleOnChange}
      />
      <InputField
        name={"text"}
        value={text.value}
        valid={text.valid}
        errorText={text.errorText}
        label={"Text"}
        type={"textArea"}
        mandatory
        onChange={handleOnChange}
        onBlur={handleOnChange}
      />
      <Button disabled={isBtnDisabled} onClick={submitModal}>
        Submit
      </Button>
    </div>
  );
};

export default Form;
