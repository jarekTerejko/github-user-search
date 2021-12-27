import styled from "styled-components";
import { ImageEl } from "../Image/ImageEl";

export const UserWrapper = styled.main`
  margin-top: 2.5rem;
  border-radius: 1.5rem;
`;

export const UserInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr 1fr;
  column-gap: 36px;
  background: var(--bg-secondary);
  border-radius: 1.5rem;
  padding: 5rem;
  box-shadow: ${({ theme }) =>
    theme === "dark" ? "" : "0 16px 30px -10px rgba(70, 96, 187, 0.2)"};

  @media screen and (max-width: 450px) {
    padding: 2rem;
    column-gap: 20px;
  }
`;

export const UserColRightAvatar = styled(ImageEl)`
  max-width: 12rem;
  border-radius: 50%;

  @media screen and (max-width: 500px) {
    max-width: 8rem;
  }
`;

export const UserColRightPartOne = styled.div`
  grid-column: 2/4;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const UserColRightPartTwo = styled.div`
  grid-column: 2/4;

  @media screen and (max-width: 768px) {
    grid-column: 1/4;
  }
`;

export const UserColRightPartThree = styled.div`
  grid-column: 2/4;

  @media screen and (max-width: 768px) {
    grid-column: 1/4;
  }
`;

export const UserLogin = styled.h3`
  color: var(--primary);
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    grid-row: 2/3;
    margin-bottom: 0;
    grid-column: 1/3;
  }
`;

export const UserYear = styled.h3`
  justify-self: end;
  font-weight: 400;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    grid-column: 1/3;
    justify-self: initial;
    margin-top: 1rem;
  }
`;

export const UserName = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: ${({ noUser }) => (noUser ? "3rem" : "")};
  color: ${({ noUser }) => (noUser ? "var(--error)" : "")};

  @media screen and (max-width: 768px) {
    grid-column: 1/3;
    align-self: end;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

export const UserBio = styled.p`
  grid-column: 2/4;
  font-size: 1.6rem;
  grid-column: ${({ largeScreen }) => (largeScreen ? "1/3" : "")};
  display: ${({ smallScreen }) => (smallScreen ? "none" : "")};

  @media screen and (max-width: 768px) {
    display: ${({ largeScreen }) => (largeScreen ? "none" : "")};
    display: ${({ smallScreen }) => (smallScreen ? "block" : "")};
    grid-column: 1/4;
    margin-top: 3rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const UserStats = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--bg);
  padding: 2rem;
  border-radius: 1rem;
  gap: 20px;
  margin: 3rem 0;

  @media screen and (max-width: 500px) {
    place-items: center;
    text-align: center;
  }
`;

export const UserStatsItem = styled.li``;

export const UserStatsItemHeader = styled.span`
  display: block;
  text-transform: capitalize;
  font-size: 1.2rem;
`;

export const UserStatsItemData = styled.h3`
  font-size: 2.4rem;

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

export const UserMoreInfo = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const UserMoreInfoItem = styled.li`
  font-size: 1.4rem;
  text-transform: capitalize;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 10px;
  align-items: center;
  opacity: ${({ isAvailable }) => (isAvailable ? "1" : ".4")};
`;

export const UserMoreInfoLink = styled.a`
  color: var(--txt-high-contrast);
  position: relative;
  text-transform: none;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  /* &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--txt-high-contrast);
    width: 100%;
    height: 1px;
    opacity: 0;
    transition: 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  } */
`;
