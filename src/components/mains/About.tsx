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

export default function About() {
    return (
        <StyledMain>
            <section className="about-content">
                <h2>Jackson Pine</h2>
                <Paragraph>I'm a developer and designer who thrives on turning complex problems into elegant solutions. My journey
                    in
                    technology began during my undergraduate studies, where I discovered my passion for building
                    applications that make a real difference in people's lives.</Paragraph>

                <h2>My Approach</h2>
                <Paragraph>I believe in writing clean, maintainable code and following best practices. Collaboration is at the heart
                    of everything I do, whether I'm working with designers, product managers, or fellow developers. I'm
                    constantly learning and staying up-to-date with the latest technologies and industry trends.</Paragraph>


                <h2>Beyond Code</h2>
                <Paragraph>When I'm not coding, you can find me working on creative projects or practicing my hobbies.</Paragraph>

                <h2>Let's Work Together</h2>
                <Paragraph>I'm always open to meeting other creators and developers and hearing their ideas.
                    Whether you want to work together or just say hi, feel free to reach out.</Paragraph>
            </section>
        </StyledMain>
    );
}