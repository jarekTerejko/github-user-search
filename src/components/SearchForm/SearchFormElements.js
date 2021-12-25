import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchFormWrapper = styled(motion.div)`
  margin-top: 3rem;
`;

export const SearchFormEl = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 1rem;
  background: var(--bg-secondary);
  position: relative;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) =>
    theme === "dark" ? "" : "0 16px 30px -10px rgba(70, 96, 187, 0.2)"};
`;

export const SearchFormInput = styled.input`
  background: none;
  border: none;
  padding-left: 6rem;
  color: var(--txt-high-contrast);
  width: 100%;
  height: 4rem;
  font-size: 1.6rem;
  font-family: var(--ff-monospace);

  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
    padding: 0.8rem 0.8rem 0.8rem 5rem;
  }
  &::placeholder {
    color: var(--txt-search-placeholder);
    font-size: 1.6rem;
    font-family: var(--ff-monospace);
    @media screen and (max-width: 500px) {
      font-size: 1.6rem;
    }
  }
`;

export const SearchFormBtn = styled.button`
  border: none;
  padding: 1.3rem 2rem;
  border-radius: 1rem;
  font-size: 1.6rem;

  background: var(--primary);

  color: var(--txt-high-contrast);
  font-weight: bold;
  font-family: var(--ff-monospace);
  white-space: nowrap;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: var(--primary-hover);
  }
  @media screen and (max-width: 500px) {
    padding: 0.8rem 2rem;
  }
`;

export const SearchFormImg = styled.img`
  position: absolute;
  top: 23px;
  left: 30px;
  @media screen and (max-width: 500px) {
    top: 18px;
    left: 20px;
  }
`;

export const SearchFormErrorMsg = styled.span`
  color: var(--error);
  position: absolute;
  bottom: 0;
  left: 70px;
`;
