import React from 'react';
import styled from 'styled-components';

const StyledBookForm = styled.form`
`;

const StyledBookButton = styled.button`
  display: inline-block;
  position: relative;
  text-align: center;
  transition-property: background, border-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  cursor: pointer;
  width: 100%;
  min-width: 71.1935px;
  margin: 0px;
  text-decoration: none;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  background: rgb(255, 90, 95);
  border-color: transparent;
  align-items: flex-start;
  box-sizing: border-box;
  border-image: initial;
  text-rendering: auto;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  font: 400 11px system-ui;
  margin: 0;
  padding: 10px 22px 10px 22px;

  :active {
    background: rgb(223, 60, 71);
  }

  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  };
`;

const StyledButtonText = styled.div`
  overflow-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.375em;
  color: rgb(255, 255, 255);
  margin: 0px;
`;

const StyledChargeText = styled.div`
  margin-top: 8px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33333em;
  color: #484848;
  text-align: center;
  -webkit-font-smoothing: antialiased;
`;

const Book = () => (
  <StyledBookForm>
    <StyledBookButton>
      <StyledButtonText>Reserve</StyledButtonText>
    </StyledBookButton>
    <StyledChargeText>You won't be charged yet</StyledChargeText>
  </StyledBookForm>
);

export default Book;
