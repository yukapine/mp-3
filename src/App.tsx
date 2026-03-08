import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Education from "./components/mains/Education.tsx";
import Home from "./components/mains/Home.tsx";
import Portfolio from "./components/mains/Portfolio.tsx";
import Certifications from "./components/mains/Certifications.tsx";
import About from "./components/mains/About.tsx";
import Projects from "./components/mains/Projects.tsx";
import styled from "styled-components";


const StyledWrapper = styled.div`
   
`;

const StyledContainer = styled.div`
    
`;

function Root() {
  return (
    <StyledWrapper>
      <Header />
      <StyledContainer>
        <Nav />
        <Routes>
          <Route
            path={`/`}
            element={<Home />}
          />
          <Route
            path={`/education/education.html`}
            element={<Education />}
          />
          <Route
            path={`/employment/about.html`}
            element={<About />}
          />
          <Route
            path={`/achievements/certifications.html`}
            element={<Certifications />}
          />
          <Route
            path={`/references/portfolio.html`}
            element={<Portfolio />}
          />
          <Route
            path={`/documents/projects.html`}
            element={<Projects />}
          />

        </Routes>
      </StyledContainer>
      <Footer />
    </StyledWrapper>
  );
}

const router = createBrowserRouter(
  [{ path: "*", Component: Root }]
)


export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}