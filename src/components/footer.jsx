import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "../assets/logo.png";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

export default function Footer({ person }) {
  return (
    <footer className="bg-dark text-dark text-center bg-white">
      <Container>
        <Row className="p-0 m-0">
          <Col className="p-3" xs={12} md={3}>
            <p>&copy; Proudly created by</p>
            <img src={logo} alt="logo" width="100" className="img-fluid" />
          </Col>
          <Col className="p-3" xs={12} md={3}>
            <p>Call </p>
            <p>{person.phone}</p>
          </Col>
          <Col className="p-3" xs={12} md={3}>
            <p>Email</p>
            <p>{person.email}</p>
          </Col>
          <Col className="p-3" xs={12} md={3}>
            <p>Follow</p>
            <a
              href={person.facebook}
              title="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="icons mx-3" />
            </a>
            <a
              href={person.twitter}
              title="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="icons mx-3" />
            </a>
            <a
              href={person.instagram}
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="icons mx-3" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
