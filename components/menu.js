import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <HamburgerButton onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerButton>
            <MenuWrapper isOpen={isOpen}>
                <MenuItem onClick={toggleMenu}>
                    <Link href="/">
                        Home
                    </Link>
                </MenuItem>
                <MenuItem onClick={toggleMenu}>
                    <Link href="/">
                        About
                    </Link>
                </MenuItem>
                <MenuItem onClick={toggleMenu}>
                    <Link href="/">
                        Contact
                    </Link>
                </MenuItem>
            </MenuWrapper>
        </>
    );
};

const HamburgerButton = styled.button`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 30px;
height: 20px;
background-color: transparent;
border: none;
cursor: pointer;

span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #000;
  transition: transform 0.3s ease;
}

span:nth-child(1) {
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
}

span:nth-child(2) {
  opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
}

span:nth-child(3) {
  transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
}
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #000;
  padding: 20px;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  z-index: 999;
`;

const MenuItem = styled.div`
  /* styles for menu item */
`;

export default HamburgerMenu;
