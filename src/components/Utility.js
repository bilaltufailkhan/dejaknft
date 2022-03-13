import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import UTILITY from "../assets/img/UTILITY.png"

function Utility() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col md="2">
                        <img src={UTILITY} alt="UTILITY" className="vertical-img mt-5" />
                    </Col>
                    <Col>
                        <Card className="utility-card shadow">
                            <CardBody>
                                <h3 className="utility-title mt-3">Raffles</h3>
                                <p className="card-subtitle mt-2 mb-3">
                                    each dejak will double as one entry into the raffle. the 1st raffle
                                    will take place 10 days after the close of the sale <span className="text-primary-1">
                                        (please see roadmap
                                        for prize details)
                                    </span>. there will potentially be a raffle every month after
                                    the 1st one but this will be determind by the community.
                                </p>
                            </CardBody>
                        </Card>
                        <Card className="utility-card mt-5 shadow">
                            <CardBody>
                                <h3 className="utility-title mt-3">Community <br /> treasurey fund</h3>
                                <p className="card-subtitle mt-3">
                                    using proceeds from the sale a community treasurey fund will be formed <span className="text-primary-1">
                                        (please see roadmap
                                        for prize details).
                                    </span>
                                    initially part of the fund will be used to fund the 1st of many possible raffles.
                                </p>
                                <p className="card-subtitle mt-2 mb-3">
                                    we have many ideas as to how the community treasurey fund could be used to bring
                                    value to the community going forward. these ideas will be put to the community
                                    but ultimatily the community will decide how the treasurey funds will be used.
                                </p>
                            </CardBody>
                        </Card>
                        <Card className="utility-card mt-5 shadow">
                            <CardBody>
                                <h3 className="utility-title mt-3">royalty revenue</h3>
                                <p className="card-subtitle mt-2 mb-3">
                                    there will be 5% royalties fee on every sale on the secondary market. half will
                                    go to the team to fund future project developments (A new roadmap
                                    will be published 30 days after launch). the other half will be
                                    used to continuesly buy up the floor.
                                </p>
                            </CardBody>
                        </Card>
                        <Card className="utility-card mt-5 shadow">
                            <CardBody>
                                <h3 className="utility-title mt-3">Members only <br /> discord</h3>
                                <p className="card-subtitle mt-2">
                                    there will be a members only discord where only verified dejak holders will have access.
                                </p>
                                <p className="card-subtitle mt-2">
                                    this is where voting on the use of treasurey funds & royalty revenue will take place
                                </p>
                                <p className="card-subtitle mt-2">
                                    this will also
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Utility
