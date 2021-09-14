import React from "react";
import "./../style/home.css";
import { Facebook, Twitter, Instagram, Linkedin } from "react-bootstrap-icons";

export default function home({ person }) {
  return (
    <div className="fullScreen d-flex position-relative">
      <div className="bg solid"></div>
      <div className="my-bg"></div>
      <div className="main-content rounded row">
        <div className="p-0 col-md-6 col-sm-12 bg shadow-lg  text-center">
          <video src={person.reference} width="100%" autoPlay></video>
          <h2>{person.name}</h2>
          <div className="brdr m-auto"></div>
          <p className="py-3">{person.job}</p>
          <div className="bg-white py-3 rounded">
            <Facebook className="icons mx-3" />
            <Twitter className="icons mx-3" />
            <Instagram className="icons mx-3" />
            <Linkedin className="icons mx-3" />
          </div>
        </div>
        <div className="col-md-6 d-md-block d-none">
          <h1>Hello</h1>
          <h3>Here's who I am & what I do</h3>
          <a
            href="/resume"
            className="btn btn-primary px-4 my-2 mr-2 rounded-pill"
          >
            RESUME
          </a>
          <a
            href="/recommendations"
            className="btn btn-outline-primary px-3 my-2 mx-2 rounded-pill text-dark outline"
          >
            RECOMMENDATION
          </a>
        </div>
      </div>
    </div>
  );
}
