import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

// Import existing project images (keep these as they are)
import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";
import ctrlsaveindex from "../../Assets/Projects/ctrlsaveindex.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a couple of projects I have worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Existing Portfolio Website Project Card */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/mrabaajr/Portfolio"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ctrlsaveindex}
              title="Financial Tracker"
              description="A financial tracker that helps you manage your expenses and income effectively."
              ghLink="https://github.com/mga-anak-ni-raf/Financial-Tracker#" 
              demoLink="https://financial-tracker-tp3g.onrender.com/index#" 
              isBlog={false} // Set to true if it's a blog post, false for a project
            />
          </Col>

          {/* You can add more project cards here following the same structure */}
          {/*
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat} // Example using an existing image import
              title="Another Project"
              description="Description for another project."
              ghLink="https://github.com/your-username/another-repo"
              demoLink="https://another-project.vercel.app/"
            />
          </Col>
          */}
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
