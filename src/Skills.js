import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import reactImage from "./images/react.png"
import jsImage from "./images/js.png"
import postgresImage from "./images/postgres.png"
import reduxImage from "./images/redux.png"
import railsImage from "./images/rails.png"
import bootstrapImage from "./images/bootstrap.png"
import gitImage from "./images/git.png"
import htmlImage from "./images/html.png"
import rubyImage from "./images/ruby.png"


const Skills = () => {

        return (
            <section className="skeleton" >
                <h1> TECHNICAL SKILLS</h1>
                <Container style={{width:"80%"}}>
                    <Row >
                        <Col className="skills">
                            <img src={reactImage} style={{width:"50%"}}/>
                            <h2 className="text-center">React</h2>
                        </Col>
                        <Col className="skills">
                            <img src={jsImage} style={{width:"50%"}}/>
                            <h2 className="text-center">JavaScript</h2>
                        </Col>
                        <Col className="skills">
                            <img src={postgresImage} style={{width:"50%"}}/>
                            <h2 className="text-center">PostgreSQL</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="skills">
                            <img src={railsImage} style={{width:"50%"}}/>
                            <h2 className="text-center">Rails</h2>
                        </Col>
                        <Col className="skills">
                            <img src={bootstrapImage} style={{width:"50%"}}/>
                            <h2 className="text-center">Bootstrap</h2>
                        </Col>
                        <Col className="skills">
                            <img src={reduxImage} style={{width:"50%"}}/>
                            <h2 className="text-center">Redux</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="skills">
                            <img src={gitImage} style={{width:"50%"}}/>
                            <h2 className="text-center">Git</h2>
                        </Col>
                        <Col className="skills"> 
                            <img src={htmlImage} style={{width:"50%"}}/>
                            <h2 className="text-center">HTML</h2>
                        </Col>
                        <Col className="skills">
                            <img src={rubyImage} style={{width:"50%"}}/>
                            <h2 className="text-center">Ruby</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    
}

export default Skills