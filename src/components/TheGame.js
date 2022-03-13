import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import Game from "../assets/img/THEGAME.png"
import GameImg from "../assets/img/GameImg.png"

function TheGame() {
    return (
        <>
            <Container className="game-container">
                <Row >
                    <Col md="2">
                        <img src={Game} alt="Game" className="vertical-img mt-5" />
                    </Col>
                    <Col>
                        <Card className="custom-card px-5 mb-5 game-card">
                            <h2 className="card-title mt-5">how <br /> it works</h2>
                            <p className="card-subtitle px-2 mt-5">
                                Putting the dejaks' skills to the test, we have created a unique game which will
                                separate the good traders from the bad.
                                giving the community the chance to learn from the best amongst you and where only
                                the most diamond-handed will be rewarded...
                            </p>
                            <Row className="mt-5 mb-5">
                                <Col md="7">
                                    <p className="card-subtitle px-2">
                                        from proceeds of the sale, a community treasury fund will be formed.
                                        it will be used as a trading fund, with trading ideas put forward
                                        & decided on by the community. profits will be compunded back into the fund,
                                        used to buy up the floor & remove Nfts from circulation, or finance monthly
                                        raffles. again, this will be decided upon by the community.
                                    </p>
                                    <br />
                                    <p className="card-subtitle px-2">
                                        the game will come to an end once the circulating supply of nfts has
                                        reached a set number (No to be disclosed). & the fund will be
                                        split between all remaining nft holders with an equal share per nft.
                                    </p>
                                    <br />
                                    <p className="card-subtitle px-2">
                                        May the best diamond-handed dejaks win!!!
                                    </p>
                                </Col>
                                <Col md="5">
                                    <img src={GameImg} alt="GameImg" width="100%" />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TheGame
