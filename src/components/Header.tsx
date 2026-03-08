import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #1b1b1b;
  color: white;
  padding: calc(1rem + 0.5vw);
  text-align: left;
`;

const Title = styled.h1`
  font-size: calc(1.8rem + 1vw);
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: calc(0.9rem + 0.3vw);
  font-weight: 300;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Title>Jackson Pine</Title>
            <Subtitle>Developer, Student, and Graphic Designer</Subtitle>
        </StyledHeader>
    );
}

{/* <header>
            <h1>Jackson Pine</h1>
            <p>Developer, Student, and Graphic Designer</p>
        </header> */}