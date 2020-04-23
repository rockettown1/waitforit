import React from "react";
import styled from "styled-components";
import Options from "../assets/zoomOptions.png";
import Manage from "../assets/manage.png";
import Wait from "../assets/waitingroom.png";
import More from "../assets/more.png";

const Help = () => {
  return (
    <Container>
      <h3>Notes for using the Video component</h3>
      <p style={{ textAlign: "left" }}>
        If you select the option to 'Load with Video' while using this waiting screen here are a few things to note:
      </p>
      <h3>Zoom</h3>
      <h5>Setting the audio and video</h5>
      <p style={{ textAlign: "left" }}>
        When you share your screen on Zoom you have the ability to share your computer sound and optimise your screen
        share for using videos.{" "}
      </p>
      <StyledImg src={Options} />
      <p style={{ textAlign: "left" }}>
        {" "}
        Once you've selected the screen you want to share, you should make sure both of these options are selected to
        prevent a weird laggy video being shown.{" "}
      </p>
      <h5>Disabling the waiting room</h5>
      <p style={{ textAlign: "left" }}>
        You can also disable the waiting room people are placed in when they first join your call. This way they will
        see the loading screen as soon as they arrive.
      </p>
      <StyledImg src={Manage} />
      <p style={{ textAlign: "left" }}>First click on Manage Participants</p>
      <StyledImg src={More} />
      <p style={{ textAlign: "left" }}>Then click on the 'More' option</p>
      <StyledImg src={Wait} />
      <p style={{ textAlign: "left" }}>
        Then make sure the option to 'Put participants in Waiting Room on Entry' is not checked
      </p>
      <h3>Other Platforms</h3>
      <p style={{ textAlign: "left" }}>
        I'm not sure if other platforms have these settings as I have only tested on Zoom. Unless you have found these
        options on other platforms I would opt NOT to use the video component. If you do find a way to screen share
        video and sound without lag on other platforms please let me know so I can update this.{" "}
      </p>
    </Container>
  );
};

export default Help;

const Container = styled.div`
  width: 340px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 10px;
  overflow: scroll;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;
