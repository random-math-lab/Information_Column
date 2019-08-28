import React from 'react';
import styled from 'styled-components';

const StyledReviewsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const StyledReviewsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  cursor: pointer;
  background: transparent;
  margin: 0px;
  padding: 0px;
  text-align: left;
`;

const StyledGreyStars = styled.div`
  display: inline-block;
  position: relative;
  height: 10px;
  width: 50px;
  background-repeat: space no-repeat;
  background-size: 10px 10px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='%23D8D8D8'%3E%3Cpath d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/%3E%3C/svg%3E");
  transform: translateX(-0.5px);
`;

const StyledBlueStars = styled.div`
  height: 10px;
  width: 50px;
  background-repeat: space no-repeat;
  background-size: 10px 10px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='%23008489'%3E%3Cpath d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/%3E%3C/svg%3E");
  transform: none;
  box-sizing: border-box;
`;

const StyledAvgRatingForeground = styled.div`
  height: 10px;
  width: ${({ avgRating }) => (avgRating / 5 * 50).toString().concat('px')};
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-sizing: border-box;
  overflow: hidden;
`;

const StyledNumReviews = styled.div`
  display: inline;
  font-size: 12px;
  margin-left: 2px;
`;

const Reviews = (props) => {
  const { avgRating, numReviews } = props;

  return (
    <StyledReviewsWrapper>
      <StyledReviewsButton>
        <StyledGreyStars>
          <StyledAvgRatingForeground avgRating={avgRating}><StyledBlueStars /></StyledAvgRatingForeground>
        </StyledGreyStars>
        <StyledNumReviews>{numReviews}</StyledNumReviews>
      </StyledReviewsButton>
    </StyledReviewsWrapper>
  );
};

export default Reviews;
