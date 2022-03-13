import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import AboutUs from "../assets/img/About.png";
import AboutTeam from "../assets/img/AboutTeam.png";
import img from "../assets/img/all.png";
function About() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="2">
            <img src={AboutUs} alt="AboutUs" className="vertical-img mt-5" />
          </Col>
          <Col>
            <Card className="custom-card mt-5 px-5 mb-5">
              <Row className="mt-5">
                <Col md="8" xs="12">
                  <h2 className="card-title">
                    Who <br /> We Are
                  </h2>
                  <p className="card-subtitle px-2 mt-5">
                    The Dejaks are a group of likeminded degenrate crypto and
                    nft traders who have come together to form a members only
                    club, set on helping each other make it! as a dejak alone
                    with only 24 hours in a day, between his work commitments,
                    need for sleep and his wife's constant nagging he can only
                    spend so many of those hours in front of his computer.
                  </p>
                  <br />
                  <br />
                  <p className="card-subtitle px-2 mb-5">
                    but 10,000 dejaks working together sharing alpha in each of
                    their respected areas of knowledge troughout crypto and the
                    nft sector can become wife changing, and this the club was
                    born!
                  </p>
                </Col>
                <Col md="4" xs="12">
                  {/* <img src={AboutTeam} alt="AboutTeam" className="mr-2" height="100%" width="100%" /> */}
                  <div className="main__div">
                    <div className="img__div" id="img__div">
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
