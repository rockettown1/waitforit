import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import { shouldComponentRerender } from "../utils/shouldRerender";
import styled from "styled-components";

const Counter = React.memo(({ total }) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Container>
        <StyledDiv>
          <StyledSpan>
            <Time>{zeroPad(hours)}</Time>
            <TimeLabel>hours</TimeLabel>
          </StyledSpan>
          <StyledSpan>
            <Time>{zeroPad(minutes)}</Time>
            <TimeLabel>Mins</TimeLabel>
          </StyledSpan>
          <StyledSpan>
            <Time>{zeroPad(seconds)}</Time>
            <TimeLabel>Secs</TimeLabel>
          </StyledSpan>
        </StyledDiv>
      </Container>
    );
  };

  return (
    <div>
      <Countdown date={Date.now() + total} renderer={renderer} key={total} />
    </div>
  );
}, shouldComponentRerender);

export default Counter;

const Container = styled.div`
  position: relative;
  z-index: 9;
  display: flex;
  justify-content: center;
  margin-top: -10px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 300%;

  color: white;
`;

const StyledSpan = styled.span`
  margin: 0 20px;
  width: 65px;
`;

const Time = styled.p`
  margin: 0;
  padding: 0;
`;

const TimeLabel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
`;
