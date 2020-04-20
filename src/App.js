import React, { useState } from "react";
import "./App.css";
import "../node_modules/video-react/dist/video-react.css";
import Counter from "./components/Counter";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Leon from "./assets/Leon.jpg";
import CN from "./assets/Codenation.png";
import WeAreCN from "./assets/wearecodenation.png";
import Video from "./components/Video";

const App = () => {
  const [curMin, setCurMin] = useState(0);
  const [curSec, setCurSec] = useState(0);
  const [curTotal, setCurTotal] = useState(0);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  const [showVid, setShowVid] = useState(false);
  const [background, setBackground] = useState(null);
  const [logo, setLogo] = useState(false);
  const [error, setError] = useState("");

  const convertTime = (min, sec) => {
    let minsInMilli = min * 60 * 1000;
    let secsInMilli = sec * 1000;
    return minsInMilli + secsInMilli;
  };

  const grabMin = (event) => {
    setCurMin(event.target.value);
  };
  const grabSec = (event) => {
    setCurSec(event.target.value);
  };

  const setTime = (event) => {
    event.preventDefault();
    const total = convertTime(curMin, curSec);
    setCurTotal(total);
  };

  const validatePaste = (event) => {
    try {
      setBackground(event.clipboardData.getData("Text"));
    } catch (error) {
      setError(error, "Invalid URL");
    }
  };

  return (
    <AppContainer className="App" back={background || Leon}>
      <Button onClick={() => setShow(!show)}>Open SideBar</Button>
      <Title>{title}</Title>
      <BackgroundCover></BackgroundCover>
      <Sidebar
        show={show}
        setShow={setShow}
        grabMin={grabMin}
        grabSec={grabSec}
        setTime={setTime}
        newMessage={(event) => setMessage(event.target.value)}
        message={message}
        newTitle={(event) => setTitle(event.target.value)}
        title={title}
        showVid={showVid}
        setShowVid={setShowVid}
        background={background}
        newBackground={validatePaste}
        logo={logo}
        reset={() => setBackground(Leon)}
        setLogo={setLogo}
      />
      {showVid && <Video />}
      <Wrapper>
        <Message>{message}</Message>
        <Counter total={curTotal} setTime={setTime} setCurMin={setCurMin} setCurSec={setCurSec} />
      </Wrapper>

      <CNRetro src={logo ? WeAreCN : CN} />
    </AppContainer>
  );
};

export default App;

const CNRetro = styled.img`
  position: absolute;
  height: 100px;
  width: auto;
  bottom: 0;
  left: 0;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  background-image: ${({ back }) => `url(${back})`};
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const Button = styled.p`
  position: absolute;
  text-align: center;
  z-index: 20;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  top: 0;
  left: 0%;
  opacity: 0;
  transition: all 1s;
  background-color: white;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const BackgroundCover = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: none;
`;

const Title = styled.h1`
  font-size: 90px;
  width: 70%;
  text-align: right;
  margin-right: 50px;
  color: white;
  position: absolute;
  top: 0;
  right: 0;

  z-index: 9;
`;

const Wrapper = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.h1`
  position: relative;
  z-index: 9;
  color: white;
  margin-top: 20px;
`;
