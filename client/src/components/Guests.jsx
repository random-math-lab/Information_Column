import React from 'react';
import styled from 'styled-components';
import GuestsButton from './GuestsButton.jsx';
import GuestsDropdown from './GuestsDropdown.jsx';

const StyledGuests = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

const StyledGuestsLabel = styled.label`
  margin: 0px;
  word-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3333333333333333em;
  color: #484848;
`;

const Guests = (props) => {
  const {
    isOpen, toggle, numAdults, numChildren, numInfants, guestMax, maxInfants,
    updateNumAdults, updateNumChildren, updateNumInfants,
  } = props;

  return (
    <StyledGuests>
      <StyledGuestsLabel>Guests</StyledGuestsLabel>
      <GuestsButton  // transfer state to GuestsButton
        isOpen={isOpen}
        toggle={toggle}  // toggle dropdown
        numAdults={numAdults}
        numChildren={numChildren}
        numInfants={numInfants}
      />
      {isOpen ? (
        <GuestsDropdown
          toggle={toggle}  // toggle dropdown
          numAdults={numAdults}
          numChildren={numChildren}
          numInfants={numInfants}
          guestMax={guestMax}
          maxInfants={maxInfants}
          updateNumAdults={updateNumAdults}  // passing onClick event
          updateNumChildren={updateNumChildren} // passing onClick event
          updateNumInfants={updateNumInfants} // passing onClick event
        />
      ) : null}
    </StyledGuests>
  );
};

export default Guests;
