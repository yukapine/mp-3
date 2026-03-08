import styled from 'styled-components';
// import { Link } from "react-router";

const StyledFooter = styled.footer`
  background: #494949;
  color: white;
  text-align: center;
  padding: calc(1rem + 0.3vw);
  clear: both;
  margin-top: auto;
`;

const FooterText = styled.p`
  font-size: calc(0.85rem + 0.2vw);
`;

const FooterLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #9c9c9c;
  }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <FooterText>
                &copy; 2026 Jackson Pine. All rights reserved. | <FooterLink href="#credits">Credits</FooterLink>
            </FooterText>
        </StyledFooter>
    )
}