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

export default function Certifications() {
    return (
        <StyledMain>
            <section className="certifications-content">
                <div className="cert-item">
                    <h2>PCEP (Certified Entry-Level Python Programmer)</h2>
                    <p className="issuer">PCEP</p>
                    <p className="date">Issued: March 2020</p>
                    <p className="description">Demonstrates comprehensive understanding of Python Programming.</p>
                </div>

                <div className="cert-item">
                    <h2>Java SE 17/21 Developer</h2>
                    <p className="issuer">Oracle</p>
                    <p className="date">Issued: June 2021</p>
                    <p className="description">Demonstrates comprehensive understanding of Java Programming.</p>
                </div>

            </section>
        </StyledMain>
    );
}