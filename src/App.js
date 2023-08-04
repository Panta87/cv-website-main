import React, { useState } from "react";
import About from "./components/about/About";
import Experience from "./components/informations/Experience";
import Education from "./components/informations/Education";
import Skills from "./components/skills/Skills";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import { EN, RS } from "./Utily";
import Languageoption from "./components/changeLanguage/PopUp";
import "./App.scss";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const person = isEnglish ? EN : RS;

  const handleChangeLanguage = (e) => {
    const isEn = e.nativeEvent.target.value === "en";
    setIsEnglish(isEn);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const {
    avatar,
    name,
    profession,
    bio,
    address,
    phone,
    email,
    social,
    education,
    experience,
    skills,
  } = person;
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="contact-btn">
          {" "}
          <Button onClick={openModal}> Contact Me </Button>{" "}
        </div>
        <About
          avatar={avatar}
          name={name}
          profession={profession}
          bio={bio}
          address={address}
          phone={phone}
          email={email}
          social={social}
        />
      </div>

      <div className="content-wrapper">
        <div className="content">
          <Languageoption handleChangeLanguage={handleChangeLanguage} />
          <Education education={education} />
          <Experience experience={experience} />
          <Skills skills={skills} />
        </div>
      </div>
      {isOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default App;
