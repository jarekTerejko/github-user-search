import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled(motion.nav)``;
export const NavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarSiteLinkR = styled(Link)`
  color: var(--txt-high-contrast);
  font-size: 2.4rem;
  font-weight: 700;
`;

export const NavbarThemeBtn = styled.button`
  border: none;
  background: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--txt-high-contrast);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--theme-switch-btn-hover);
  }
`;
