import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%
  height: 60px;
`;

const StyledHomeAndViews = styled.div`
`;

const StyledLightbulb = styled.img`
  height: 50px;
  width: 50px;
`;

const StyledHomeMindsText = styled.div`
  overflow-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28571em;
  color: rgb(72, 72, 72);
  margin: 0px;
`;

const StyledHomeViewedText = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2857142857142858em;
  margin-top: 6px;
  overflow-wrap: break-word;
  color: #484848;
`;

const Info = (props) => {
  const { numViews } = props;

  return (
    <StyledInfo>
      <StyledHomeAndViews>
        <StyledHomeMindsText>This home is on people's minds.</StyledHomeMindsText>
        <StyledHomeViewedText>
          It's been viewed
          {numViews > 500 ? ' 500+ ' : ` ${numViews} `}
          times in the past week.
        </StyledHomeViewedText>
      </StyledHomeAndViews>
      <StyledLightbulb src="http://127.0.0.1:3001/lightbulb.gif" alt="lightbulb animation" />
    </StyledInfo>
  );
};

export default Info;
