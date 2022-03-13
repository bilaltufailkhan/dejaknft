import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import FAQImg from "../assets/img/FAQ.png"

function FAQ() {
    const [activeTab, setActiveTab] = useState("2")
    return (
        <>
            <Container className="mb-5">
                <Row className="mt-5">
                    <Col md="2" className="mt-5">
                        <img src={FAQImg} alt="FAQImg" className="vertical-img mt-5" />
                    </Col>
                    <Col>
                        <Card className={`faq-card shadow pointer ${activeTab == "1" && "faq-active"}`} onClick={() => setActiveTab("1")}>
                            <Row>
                                <Col md="2" className={`${activeTab != "1" && "d-none"}`}>
                                    <div className="faq-card-point text-center">
                                        <h2>01</h2>
                                    </div>
                                </Col>
                                <Col className={`align-self-center ${activeTab == "1" && "mr-5"}`}>
                                    <CardBody className={`d-flex ${activeTab !== "1" && "px-5 py-4"}`}>

                                        <h3 className={`${activeTab == "1" && "text-white"} faq-card-heading`}>how many dejak are available?</h3>
                                        <i className={`${activeTab == "1" ? "fa fa-chevron-up text-white" : "fa fa-chevron-down"} fa-2x mt-1 ml-auto`}></i>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                        <Card className={`faq-card mt-5 shadow pointer ${activeTab == "2" && "faq-active"}`} onClick={() => setActiveTab("2")}>
                            <Row>
                                <Col md="2" className={`${activeTab != "2" && "d-none"}`}>
                                    <div className="faq-card-point text-center">
                                        <h2>02</h2>
                                    </div>
                                </Col>
                                <Col className={`align-self-center ${activeTab == "2" && "mr-5"}`}>
                                    <CardBody className={`d-flex ${activeTab !== "2" && "px-5 py-4"}`}>

                                        <h3 className={`${activeTab == "2" && "text-white"} faq-card-heading`}>Public sale</h3>
                                        <i className={`${activeTab == "2" ? "fa fa-chevron-up text-white" : "fa fa-chevron-down"} fa-2x mt-1 ml-auto`}></i>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                        <ul className={`faq-points mt-5 ml-5 ${activeTab == "2" ? 'd-block' : 'd-none'}`}>
                            <li>public 6 mint limit per transaction</li>
                        </ul>
                        <Card className={`faq-card mt-5 shadow pointer ${activeTab == "3" && "faq-active"}`} onClick={() => setActiveTab("3")}>
                            <Row>
                                <Col md="2" className={`${activeTab != "3" && "d-none"}`}>
                                    <div className="faq-card-point text-center">
                                        <h2>03</h2>
                                    </div>
                                </Col>
                                <Col className={`align-self-center ${activeTab == "3" && "mr-5"}`}>
                                    <CardBody className={`d-flex ${activeTab !== "3" && "px-5 py-4"}`}>

                                        <h3 className={`${activeTab == "3" && "text-white"} faq-card-heading`}>when can i mint?</h3>
                                        <i className={`${activeTab == "3" ? "fa fa-chevron-up text-white" : "fa fa-chevron-down"} fa-2x mt-1 ml-auto`}></i>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                        <Card className={`faq-card mt-5 shadow pointer ${activeTab == "4" && "faq-active"}`} onClick={() => setActiveTab("4")}>
                            <Row>
                                <Col md="2" className={`${activeTab != "4" && "d-none"}`}>
                                    <div className="faq-card-point text-center">
                                        <h2>04</h2>
                                    </div>
                                </Col>
                                <Col className={`align-self-center ${activeTab == "4" && "mr-5"}`}>
                                    <CardBody className={`d-flex ${activeTab !== "4" && "px-5 py-4"}`}>

                                        <h3 className={`${activeTab == "4" && "text-white"} faq-card-heading`}>how much does each nft cost?</h3>
                                        <i className={`${activeTab == "4" ? "fa fa-chevron-up text-white" : "fa fa-chevron-down"} fa-2x mt-1 ml-auto`}></i>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FAQ
