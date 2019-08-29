import React from 'react';
import styled from 'styled-components';

const StyledGuestsButton = styled.button`
  font-size: 100%;
  text-align: left;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgb(255, 255, 255);
  border-color: rgb(235, 235, 235);
  border-bottom-color: ${ ({ isOpen }) => isOpen ? 'rgb(0, 132, 137)' : 'rgb(235, 235, 235)'};
  border-bottom-style: solid;
  border-width: ${({ isOpen }) => isOpen ? '1px 1px 2px 1px' : '1px'};
  border-radius: 2px;
  padding: 4px;
  border-style: solid;
`;

const StyledNumGuestsLabel = styled.label`
  font-size: 19px;
  margin-left: 10px;
  padding: ${({ isOpen }) => isOpen ? '4px 8px 4px 8px' : '5px 0px 0px 0px'};
  color: rgb(72. 72. 72);
  font-weight: 300;
  background: ${({ isOpen }) => isOpen ? 'rgb(153, 237, 230)' : 'rgb(255, 255, 255)'};
  border-color: ${({ isOpen }) => isOpen ? 'rgb(153, 237, 230)' : 'rgb(255, 255, 255)'};
  border-radius: 3px;
`;

const StyledSVG = styled.svg`
  height: 16px;
  width: 16px;
  display: block;
  fill: rgb(72. 72. 72);
  margin-right: 8px;
`;

const GuestsButton = (props) => {
  const { toggle, isOpen, numAdults, numChildren, numInfants } = props;
  return (
    <StyledGuestsButton type="button" onClick={toggle} isOpen={isOpen}>
      <StyledNumGuestsLabel isOpen={isOpen}>
        {numAdults + numChildren}
        {numAdults + numChildren === 1 ? ' guest' : ' guests'}
        {numInfants === 0 ? null : (numInfants === 1 ? ', 1 infant' : `, ${numInfants} infants`)}
      </StyledNumGuestsLabel>
      <StyledSVG viewBox="0 0 18 18" role="presentation" focusable="false" height="16px" width="16px">
        { isOpen ? <path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fillRule="evenodd" /> : <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" /> }
      </StyledSVG>
    </StyledGuestsButton>
  );
};

export default GuestsButton;
