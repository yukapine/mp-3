import styled from 'styled-components';

const StyledMain = styled.main`
  background: white;
  padding: calc(1.5rem + 1vw);
  margin: calc(1rem + 0.5vw);
  margin-left: calc(30% + 1rem);
  margin-right: calc(1rem + 0.5vw);
  width: calc(70% - 2rem);
  border-radius: 10px;
  min-height: 100vh;

  @media screen and (max-width: 1000px) {
    width: calc(100% - 2rem);
    margin-left: calc(1rem + 0.5vw);
  }

  @media screen and (max-width: 750px) {
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
    margin: 0.5rem;
  }
`;

const IntroSection = styled.section`
  padding: 1rem 0;
`;

// const Heading2 = styled.h2`
//   color: #484848;
//   font-size: calc(1.5rem + 0.5vw);
//   margin-bottom: 1rem;
//   border-bottom: 3px solid #e0e0e0;
//   padding-bottom: 0.5rem;

//   @media screen and (max-width: 480px) {
//     font-size: 1.3rem;
//   }
// `;

const Heading3 = styled.h3`
  color: #5e5e5e;
  font-size: calc(1.2rem + 0.3vw);
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: calc(0.9rem + 0.2vw);
`;

const Highlights = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const HighlightCard = styled.div`
    flex: 1;
    min-width: 250px;
    color: rgb(22, 22, 22);
    padding: 24px;
    border-radius: 5px;
    background: #f8f9fa;
    border: 3px inset rgb(240, 240, 240);
`;

const CTASection = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  text-align: center;
`;

export default function Home() {
    return (
        <StyledMain>
            <IntroSection>
                <Paragraph>Jackson Pine is an illustrator, concept artist, and character designer from Berkeley, California. He is
                    currently studying Computer Science at Boston University.

                    He is well versed in Photoshop and Illustrator as well as Blender, Procreate, Indesign, and Substance
                    Painter.</Paragraph>

                <Highlights>
                    <HighlightCard>
                        <Heading3>Skills</Heading3>
                        <ul>
                            <li>Adobe Suite (Photoshop, Illustrator, Indesign, Substance Painter)</li>
                            <li>Procreate (Illustration, Design)</li>
                            <li>Blender (Modelling, Sculpting, Texturing)</li>

                            <li>JavaScript (React, Node.js, Express)</li>
                            <li>Python (Django, Flask, Data Analysis)</li>
                            <li>Database Design (PostgreSQL, MongoDB)</li>
                            <li>Version Control (Git, GitHub)</li>
                        </ul>
                    </HighlightCard>

                </Highlights>

                {/* <img src="../../../"></img> */}

                <CTASection>
                    <h3>Contact Me</h3>
                    <p>Looking forward to hearing from you!</p>
                    <p>pine22@bu.edu | Phone: (123) 456-7890</p>
                </CTASection>
            </IntroSection>
        </StyledMain>
    );
}