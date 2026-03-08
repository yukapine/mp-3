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

export default function Certifications() {
    return (
        <StyledMain>
            <section className="certifications-content">
                <div className="cert-item">
                    <h2>PCEP (Certified Entry-Level Python Programmer)</h2>
                    <Paragraph className="issuer">PCEP</Paragraph>
                    <Paragraph className="date">Issued: March 2020</Paragraph>
                    <Paragraph className="description">Demonstrates comprehensive understanding of Python Programming.</Paragraph>
                </div>

                <div className="cert-item">
                    <h2>Java SE 17/21 Developer</h2>
                    <Paragraph className="issuer">Oracle</Paragraph>
                    <Paragraph className="date">Issued: June 2021</Paragraph>
                    <Paragraph className="description">Demonstrates comprehensive understanding of Java Programming.</Paragraph>
                </div>

            </section>
        </StyledMain>
    );
}