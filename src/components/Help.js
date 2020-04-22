import React from "react";
import styled from "styled-components";
import Options from "../assets/zoomOptions.png";

const Help = () => {
  return (
    <Container>
      <h3>Notes for using the Video component</h3>
      <p style={{ textAlign: "left" }}>
        If you select the option to 'Load with Video' while using this waiting screen here are a few things to note:
      </p>
      <h3>Zoom</h3>
      <p style={{ textAlign: "left" }}>
        When you share you screen on Zoom you have the ability to share your computer sound and optimise your screen
        share for using videos.{" "}
      </p>
      <StyledImg src={Options} />
      <p style={{ textAlign: "left" }}>
        {" "}
        Once you've selected the screen you want to share, you should make sure both of these options are selected to
        prevent a weird laggy video being shown.{" "}
      </p>

      <h3>Other Platforms</h3>
      <p style={{ textAlign: "left" }}>
        {" "}
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
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;
