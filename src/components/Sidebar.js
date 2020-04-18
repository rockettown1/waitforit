import React from "react";
import styled from "styled-components";

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
}) => {
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
    <Container show={show}>
      <StyledForm onSubmit={setTime}>
        <label>Set a title for the session</label>
        <input type="text" value={title} placeholder="Title" onChange={newTitle} />
        <label>Set a message for the timer</label>
        <input type="text" value={message} placeholder="Message" onChange={newMessage} />
        <label>
          Change the background image <br /> (must be a url)
        </label>
        <input type="text" placeholder="Paste a url in here" onChange={newBackground} />
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

        <Start>Start Timer</Start>

        <Close onClick={() => setShow(!show)}>Close Sidebar</Close>
      </StyledForm>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: absolute;
  transition: all 1s;
  background-color: black;
  height: 100vh;
  width: 350px;
  top: 0;
  left: 0;
  z-index: 25;
  display: flex;
  flex-direction: column;
  color: white;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-350px)")};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;

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

const Close = styled.button`
  background-color: #f5b32e;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 75px;
  margin-right: 20px;
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
