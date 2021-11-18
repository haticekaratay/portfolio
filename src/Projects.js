import React from 'react'
import { Row, Col, Container,Card, Button, Link } from "react-bootstrap"
import Fade from 'react-reveal/Fade';
import damlaGif from './gifs/damla.gif'
import hangmanGif from './gifs/hangman.gif'
import postgradeGif from './gifs/postgrade.gif'

const Projects = () => {
        return (
            <section className="skeleton">
                <h1>Technical Projects</h1>
                <Container style={{width:"80%"}}>
                    <Row className="skeleton">
                        <Col>
                            <Card.Img variant="top"  src={damlaGif}/>
                        </Col>
                        <Col>
                        <Card.Title>DAMLA BUDGET</Card.Title>
                            A personal budget app designed with React utilizing Redux and Rails API.
                            <a href="https://github.com/haticekaratay/damla-frontend" target="_blank"> Repo </a> | 
                            <a href="https://www.youtube.com/watch?v=BfP3UTPvt8k&ab_channel=HaticeKaratay" target="_blank"> YouTube </a> |
                            <a href="https://damla-budget.netlify.app/" target="_blank"> Live </a>
                        </Col>
                    </Row>
                    <Row className="skeleton">
                        <Col>
                            <Card.Img variant="top"  src={hangmanGif}/>
                        </Col>
                        <Col>
                        <Card.Title>HANGMAN</Card.Title>
                            This is a Javascript HangMan Game fetching data from Rails API.
                            <a href="https://github.com/haticekaratay/hangman-frontend" target="_blank"> Repo </a> | 
                            <a href="https://www.youtube.com/watch?v=gQH8w31jXCU&ab_channel=HaticeKaratay" target="_blank"> YouTube </a> |
                            <a href="https://hangman-word-guess.netlify.app/" target="_blank"> Live </a>
                        </Col>
                    </Row>

                    <Row className="skeleton">
                        <Col>
                            <Card.Img variant="top"  src={postgradeGif} />
                        </Col>
                        <Col>
                            <Card.Title>POST-GRADE</Card.Title>
                            This Rails frontend and backend application allows users/teachers to create assignments for courses they teach and display gradebook for each class. 
                            <a href="https://github.com/haticekaratay/post-grade" target="_blank"> Repo </a> | 
                            <a href="https://www.youtube.com/watch?v=gQH8w31jXCU&ab_channel=HaticeKaratay" target="_blank"> YouTube </a> |
                            <a href="https://hangman-word-guess.netlify.app/" target="_blank"> Live </a>
                        </Col>
                    </Row>

                </Container>
            </section>
        )
    
}

export default Projects