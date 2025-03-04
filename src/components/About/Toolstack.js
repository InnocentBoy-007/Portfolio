import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiGithub,
    SiLinux,
    SiWindows11
} from "react-icons/si";

import { DiAws } from "react-icons/di";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows11 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAws />
            </Col>
        </Row>
    );
}

export default Toolstack;
