import { ContainerEl } from "../Container/ContainerEl";
import { ImageEl } from "../Image/ImageEl";
import {
  NavbarInnerWrapper,
  NavbarSiteLinkR,
  NavbarThemeBtn,
  NavbarWrapper,
} from "./NavbarElements";
import Sun from "../../images/icon-sun.svg";
import Moon from "../../images/icon-moon.svg";

const Navbar = ({ changeTheme, theme }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 },
    },
  };
  return (
    <>
      <NavbarWrapper
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContainerEl>
          <NavbarInnerWrapper>
            <NavbarSiteLinkR to="/">devfinder</NavbarSiteLinkR>
            <NavbarThemeBtn onClick={changeTheme}>
              {theme === "dark" ? "light" : "dark"}
              <ImageEl
                src={theme === "dark" ? Sun : Moon}
                style={{ marginLeft: "1.5rem" }}
                alt={theme === "dark" ? "moon" : "sun"}
              />
            </NavbarThemeBtn>
          </NavbarInnerWrapper>
        </ContainerEl>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
