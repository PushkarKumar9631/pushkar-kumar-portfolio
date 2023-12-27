import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bvokal from "../../Assets/Projects/bvokal.png";
// import emotion from "../../Assets/Projects/emotion.png";
import Lucicam from "../../Assets/Projects/Lucicam.png";
import lucihub from "../../Assets/Projects/Lucihub.png";
import ginnibiz from "../../Assets/Projects/Ginnibiz.png";
import butterfly from "../../Assets/Projects/butterfly.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lucihub}
              isBlog={false}
              title="Lucihub"
              description="The Product from which I started my testing career is Lucihub, Lucihub was made out of a need to make quality video production fast, seamless, and accessible. Our team had combined our passion for innovative technology and creativity to offer an unrivaled service which includes Camera to cloud feature for events and then provides the final Edited Videos by professional video editors to the customers, it also Support enterprise role based structure."
              ghLink="https://app.lucihub.com"
              demoLink="https://lucihub.com/about"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={butterfly}
              isBlog={false}
              title="Butterfly-Lucihub"
              description="This product is very close to my heart because this was the first AI based website which I had tested, It was called as Lucihub Butterfly. An AI-Powered Assistant Creative Director Accelerating Video Production. We can create Scripts, Shotlists, Storyboards, Blogs, Press-release and Social-media contents with the help of Lucihub Butterfly AI"
              ghLink="https://butterfly-dev.lucihub.ai/"
              demoLink="https://lucihub.com/media-hub/lucihub-butterfly-creative-director"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lucicam}
              isBlog={false}
              title="Lucicam"
              description="I have done my First IOS App testing on this product called as Lucicam which is a companion application for the Lucihub platform, it provides features to record videos and upload to some designated project on Lucihub. User can record videos in burst and lock mode in any orientation which is predefined while creating a project on Lucihub and Upload to the respective project."
              ghLink="https://apps.apple.com/us/app/lucicam/id6446018575"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bvokal}
              isBlog={false}
              title="Bvokal"
              description="Tested this beautifull product called Bvokal. At its core, Bvokal provides a dynamic space to engage, promoting the exchange of knowledge, resources, and opportunities. This unified platform allows professionals and organizations in the social sector to collaborate, share insights, discuss ideas, establish connections that collectively drive social change. Bvokal empowers stakeholders to create brighter, more inclusive future through informed collaboration and a shared sense of purpose."
              ghLink="https://bvokal.com/login"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ginnibiz}
              isBlog={false}
              title="Ginnibiz"
              description="I have tested a CRM tool as well which is called as Ginnibiz. It provides a platform on which Companies can track there employees attendance, documents, organisation chart, affirmation, openings, leave requests etc. and the Employeed can mark there attendance daily and apply leaves from here and they can also see there attendance report, leave balance, affirmation, gratitude, organisation members etc."
              ghLink="https://www.coach.ginnibiz.com/"
              // demoLink="www.google.com" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com"
              // demoLink="www.google.com"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
