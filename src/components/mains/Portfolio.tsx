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

const Paragraph = styled.p`
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: calc(0.9rem + 0.2vw);
`;


export default function Portfolio() {
    return (
        <StyledMain>
            <h2>Professional Experience</h2>

            <div className="job-item">
                <h3>Art Director</h3>
                <h4>Plot Point Magazine</h4>
                <Paragraph className="date">2024 – Present</Paragraph>
                <Paragraph>
                    Lead the visual direction of Plot Point Magazine, shaping the publication’s overall aesthetic and
                    branding.
                    Collaborate closely with writers and editors to design layouts, illustrations, and visual storytelling
                    elements that enhance narrative impact. Oversee contributor artwork and ensure consistency across print
                    and digital editions.
                </Paragraph>
            </div>

            <div className="job-item">
                <h3>Graphic Designer</h3>
                <h4>Fabrio Magazine</h4>
                <Paragraph className="date">2023 – 2024</Paragraph>
                <Paragraph>
                    Designed editorial layouts, promotional graphics, and branding assets for Fabrio Magazine.
                    Worked within established brand guidelines while introducing fresh visual concepts.
                    Coordinated with the editorial team to meet tight deadlines and maintain a cohesive visual identity.
                </Paragraph>
            </div>

            <div className="job-item">
                <h3>Freelance Illustrator</h3>
                <Paragraph className="date">2022 – Present</Paragraph>
                <Paragraph>
                    Create custom illustrations for clients across editorial, digital, and personal projects.
                    Adapt style to suit diverse creative briefs while maintaining a strong personal visual voice.
                    Manage client communication, revisions, and project timelines independently.
                </Paragraph>
            </div>

            <div className="job-item">
                <h3>Art Director</h3>
                <h4>Quelloph RPG</h4>
                <Paragraph className="date">2023 – Present</Paragraph>
                <Paragraph>
                    Direct the visual world-building and artistic vision for Quelloph RPG.
                    Develop character designs, environments, and graphic assets that support narrative and gameplay.
                    Collaborate with writers and designers to ensure visual cohesion across game materials and promotional
                    media.
                </Paragraph>
            </div>
        </StyledMain>
    );
}