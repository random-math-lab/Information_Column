import React from 'react';
import styled from 'styled-components';

const StyledCloseButtonWrapper = styled.div`
  margin: 0px 0px 24px;
`;

const StyledCloseButton = styled.button`
  padding: 8px;
  margin: -8px;
  cursor: pointer;
  background: transparent;
  outline: 0px;
  border-width: 1px;
  border-style: initial;
  border-radius: 100%;
  border-image: initial;
  border-color: initial;
  
  :active {
    box-shadow: rgb(216, 216, 216) 0 0 4px 2px;
  };
`;

const StyledSVG = styled.svg`
  display: block;
  fill: rgb(118, 118, 118);
`;

const CloseButton = () => (
  <StyledCloseButtonWrapper>
    <StyledCloseButton>
      <StyledSVG viewBox="0 0 24 24" role="img" focusable="false" height="16px" width="16px">
        <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
      </StyledSVG>
    </StyledCloseButton>
  </StyledCloseButtonWrapper>
);

export default CloseButton;
