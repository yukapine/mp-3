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

export default function Education() {
    return (
        <StyledMain>
            <section className="education-content">
                <div className="education-item">
                    <h2>Boston University</h2>
                    <h3>Bachelors Degree in Computer Science</h3>
                    <Paragraph className="date">September 2022 - May 2026</Paragraph>
                    <Paragraph className="gpa">GPA: 3.5/4.0</Paragraph>

                    <h4>Relevant Coursework:</h4>
                    <ul>
                        <li>Data Structures and Algorithms</li>
                        <li>Database Management Systems</li>
                        <li>Web Application Development</li>
                        <li>Software Engineering Principles</li>
                        <li>Operating Systems</li>
                        <li>Graphics</li>
                        <li>Machine Learning Fundamentals</li>
                    </ul>

                    <h4>Honors and Awards:</h4>
                    <ul>
                        <li>Dean's List (Fall 2020, Spring 2021, Fall 2021, Spring 2022)</li>
                    </ul>

                    <h4>Activities:</h4>
                    <ul>
                        <li>Art Director, Plot Point Magazine</li>
                    </ul>
                </div>
            </section>
        </StyledMain>
    );
}