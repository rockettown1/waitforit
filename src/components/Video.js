import React, { useState } from "react";
import Youtube from "react-youtube";
import styled from "styled-components";

export default function Video() {
  const CNYoutube = ["m2WOkT253uk", "Bb-0JJKST6M", "hj7eHceHjGA", "ZD0idqVjYAw"];
  const [number, setNumber] = useState(0);

  const opts = {
    height: "400",
    width: "700",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onEnd = () => {
    if (number < CNYoutube.length - 1) {
      setNumber(number + 1);
    } else {
      setNumber(0);
    }
  };

  return (
    <Container>
      <Youtube videoId={CNYoutube[number]} opts={opts} onEnd={() => _onEnd()} style={{ borderRadius: "10px" }} />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  left: 0;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  border-radius: 15px;
  overflow: hidden;
  width: 700px;
  height: 380px;
  margin-left: 50px;
  z-index: 8;
`;
