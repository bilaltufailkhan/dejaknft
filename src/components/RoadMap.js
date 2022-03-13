import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import RoadMapText from "../assets/img/ROADMAP.png";
import Points from "../assets/img/Points.png";
import Treasure from "../assets/img/treasure.png";
import Rolex from "../assets/img/ROLEX.png";
import Lambo from "../assets/img/Lambo.png";
function RoadMap() {
  return (
    <>
      <Container className="roadmap-section">
        <Row>
          <Col md="2" className="mt-5">
            <img
              src={RoadMapText}
              alt="RoadMapText"
              className="roadmap-vertical"
            />
          </Col>
          <Col>
            <Card className="roadmap-container border-0 mt-5">
              <Row>
                <Col md="2" align="center">
                  <img
                    src={Points}
                    alt="Points"
                    width="100%"
                    className="points-img"
                  />
                </Col>
                <Col md="6">
                  <div className="points-container1">
                    <p className="point-heading">10% of sale</p>
                    <p className="point-heading text-white">
                      10 eth added to the community treasurey
                    </p>
                  </div>
                  <div className="points-container2">
                    <p className="point-heading">25% of sale</p>
                    <p className="point-heading text-white">
                      25 eth added to the community treasurey = 35 eth total
                    </p>
                    <hr className="custom-hr" />
                    <p className="point-subheading">
                      <span className="text-white">Raffle</span> 1 winner - a
                      rolex (30K USDT) or 10 eth{" "}
                    </p>
                  </div>
                  <div className="points-container3">
                    <p className="point-heading">50% of sale</p>
                    <p className="point-heading text-white">
                      50 eth added to the community treasurey = 85 eth total
                    </p>
                    <hr className="custom-hr" />
                    <p className="point-subheading">
                      <span className="text-white">Raffle</span> 1 winner - a
                      rolex (30K USDT) or 10 eth{" "}
                    </p>
                  </div>
                  <div className="points-container4">
                    <p className="point-heading">75% of sale</p>
                    <p className="point-heading text-white">
                      75 eth added to the community treasurey = 160 eth total
                    </p>
                    <hr className="custom-hr" />
                    <p className="point-subheading">
                      <span className="text-white">Raffle</span> 5 winners - a
                      rolex (30K USDT) or 10 eth{" "}
                    </p>
                  </div>
                  <div className="points-container5">
                    <p className="point-heading">100% of sale</p>
                    <p className="point-heading text-white">
                      100 eth added to the community treasurey = 260 eth total
                    </p>
                    <hr className="custom-hr" />
                    <p className="point-subheading">
                      <span className="text-white">Raffle</span> 1 winner - a
                      Lamborghini (300K USDT) or 100 eth{" "}
                    </p>
                    <p className="point-subheading">
                      <span className="text-white">Or</span> 10 winners - a
                      rolex (30K USDT) or 10 eth each
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <img src={Treasure} alt="treasue" className="treasure-img" />
                  <img src={Rolex} alt="Rolex" className="rolex-img" />
                  <img src={Lambo} alt="Lambo" className="lambo-img" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <div>
            <p className="point-subheading text-white mt-5 mb-0">
              prizes to be voted on by the community
            </p>
            <p className="point-subheading text-white mt-0">
              within the members only discord section
            </p>
          </div>
          <p className="point-heading text-white">
            the sale will end 48 hrs after launch any nfts not minted will be
            burnt
          </p>
        </Row>
      </Container>
    </>
  );
}

export default RoadMap;
