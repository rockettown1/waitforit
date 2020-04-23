import React, { useState } from "react";
import styled from "styled-components";
import Help from "./Help";

const Sidebar = ({
  grabMin,
  grabSec,
  setTime,
  newMessage,
  message,
  show,
  setShow,
  showVid,
  setShowVid,
  title,
  newTitle,
  newBackground,
  logo,
  setLogo,
  cam,
  setCam,
  reset,
}) => {
  const [val, setVal] = useState("");
  const [help, setHelp] = useState(false);
  //setup for options in select inputs
  const minsArr = [0, 1, 2, 3, 4];
  for (let i = 5; i <= 60; i += 5) {
    minsArr.push(i);
  }
  const secsArr = [];
  for (let i = 0; i < 60; i += 5) {
    secsArr.push(i);
  }

  return (
    <Container show={show} help={help}>
      <Help />

      <StyledForm onSubmit={setTime}>
        <h4 onClick={() => setHelp(!help)} style={{ marginTop: "35px" }}>
          If this is the first time you've used this web app please{" "}
          <span style={{ color: "#f5b32e", cursor: "pointer" }}>click here</span>
        </h4>

        <label>Set a title for the session</label>
        <input type="text" value={title} placeholder="Title" onChange={newTitle} />
        <label>Set a message for the timer</label>
        <input type="text" value={message} placeholder="Message" onChange={newMessage} />
        <label>
          Change the background image <br />{" "}
          <span style={{ fontSize: "0.9em" }}>
            (must be a valid image url and must be pasted in - it listens for the paste event.)
          </span>
        </label>
        <input
          type="text"
          placeholder="Paste a url in here"
          onPaste={(event) => {
            newBackground(event);
          }}
          onChange={(event) => setVal(event.target.value)}
          contentEditable="true"
          value={val}
        />
        <SecondaryButton
          onClick={() => {
            reset();
            setVal("");
          }}
        >
          Reset Default Image
        </SecondaryButton>
        <select onChange={(event) => grabMin(event)}>
          <option>Set mins:</option>
          {minsArr.map((min) => {
            return <option value={min}>{min}</option>;
          })}
        </select>
        <select onChange={(event) => grabSec(event)}>
          <option>Set secs</option>
          {secsArr.map((sec) => {
            return <option value={sec}>{sec}</option>;
          })}
        </select>
        <CheckBoxDiv>
          <label>Load with video</label>
          <input type="checkbox" onClick={() => setShowVid(!showVid)} />
        </CheckBoxDiv>
        <CheckBoxDiv>
          <label>Go retro</label>
          <input type="checkbox" onClick={() => setLogo(!logo)} />
        </CheckBoxDiv>
        <CheckBoxDiv>
          <label>Go Cambridge</label>
          <input type="checkbox" onClick={() => setCam(!cam)} />
        </CheckBoxDiv>

        <Start
          onClick={() => {
            setShow(!show);
            setHelp(false);
          }}
        >
          Start Timer
        </Start>
        <h5
          style={{
            marginBottom: 0,
            position: "absolute",
            top: 0,
            left: 0,
            marginLeft: "22px",
            color: "#5e5c58",
          }}
        >
          {"<"} Updated 23/04/2020
        </h5>
      </StyledForm>
      <SecondaryButton
        onClick={() => {
          setShow(!show);
          setHelp(false);
        }}
        style={{ position: "absolute", right: 0, bottom: 0, marginRight: "20px" }}
      >
        Close Sidebar
      </SecondaryButton>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: absolute;
  transition: all 1s;
  background-color: black;
  height: 100vh;
  width: 710px;
  top: 0;
  left: 0;
  z-index: 25;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
  color: white;
  transform: ${({ show, help }) => (show ? (help ? "translateX(0)" : "translateX(-350px)") : "translateX(-710px)")};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  margin-right: 10px;
  position: relative;

  label {
    text-align: left;
    min-width: 150px;
  }

  select {
    width: 75px;
    margin-top: 20px;
    height: 25px;
  }

  input[type="text"] {
    width: 300px;
    margin-top: 10px;
    margin-bottom: 20px;
    height: 25px;
    font-size: 15px;
    border-radius: 5px;
  }

  button {
    width: 75px;
    margin-top: 20px;
  }
`;

const SecondaryButton = styled.p`
  background-color: #f5b32e;
  font-size: 10px;
  width: 100px;
  border-radius: 5px;
  padding: 5px;
  color: black;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const CheckBoxDiv = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: flex-end;
`;

const Start = styled.button`
  background-color: #f5b32e;
  height: 30px;
  border-radius: 5px;
  position: relative;
  width: 100% !important;
  color: black;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.95);
  }
`;
