import React from "react";
import References from "../References";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <References />
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p className="text-center">Rockfish Conservation 2020</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;