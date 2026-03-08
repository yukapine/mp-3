
import styled from 'styled-components';
import { Link } from "react-router";

const StyledNav = styled.nav`
  background: #3d3d3d;
  padding: calc(1rem + 0.3vw);
  width: 30%;
  float: left;

  @media screen and (max-width: 750px) {
    width: 100%;
    float: none;
    padding: 1rem;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media screen and (max-width: 750px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: calc(0.7rem + 0.2vw);
  display: block;
  border-radius: 5px;
  transition: background 0.3s ease;
  font-size: calc(0.9rem + 0.2vw);
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    background: #b5b5b5;
  }

  &.active {
    background: #9e9e9e;
  }

  @media screen and (max-width: 750px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }
`;

export default function Nav() {
    return (
        <StyledNav>
            <NavList>
                <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
                <NavItem><StyledLink to="../home/about">About</StyledLink></NavItem>
                <NavItem><StyledLink to="../home/education">Education</StyledLink></NavItem>
                <NavItem><StyledLink to="../home/portfolio">Portfolio</StyledLink></NavItem>
                <NavItem><StyledLink to="../home/certifications">Certifications</StyledLink></NavItem>
                <NavItem><StyledLink to="../home/projects">Projects</StyledLink></NavItem>
            </NavList>
        </StyledNav>
    );
}


// import { Link } from "react-router";

// export default function Nav() {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="../home/about.html">About</Link></li>
//                 <li><Link to="../home/education.html">Education</Link></li>
//                 <li><Link to="../home/portfolio.html">Portfolio</Link></li>
//                 <li><Link to="../home/certifications.html">Certifications</Link></li>
//                 <li><Link to="../home/projects.html">Projects</Link></li>
//             </ul>
//         </nav>
//     )
// }