import React from "react";
import lamb from "../assets/lamb.jpg";
import book from "../assets/book.jpg";
import skillsImg from "../assets/skills.jpg";

export default function resume({ work, education, skills }) {
  return (
    <div className="bg pb-5">
      <div className="container width">
        <h2 className="text-center py-5">Resume</h2>
        <div>
          <h2 className="py-3">Experience</h2>
          <img src={lamb} className="w-100" alt="lamb" />
          {work.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-white px-5 pt-5 mx-auto my-5 shadow-lg row"
              >
                <div className="col-md-6 col-sm-12">
                  <h3 className="text-primary">{item.date}</h3>
                  <div className="py-3">
                    <h4>JOB POSITION</h4>
                    <p>{item.position}</p>
                  </div>
                  <div className="py-3">
                    <h4>COMPANY NAME</h4>
                    <p>{item.company}</p>
                  </div>
                  <div className="py-3">
                    <h4>LOCATION</h4>
                    <p>{item.location}</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h4 className="py-3">DESCRIPTION</h4>
                  <p>{item.descripttion}</p>
                </div>
              </div>
            );
          })}
          <h2 className="py-3">Education</h2>
          <img src={book} className="w-100" alt="book" />
          {education.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-white px-5 pt-5 mx-auto my-5 shadow-lg row"
              >
                <div className="col-md-6 col-sm-12">
                  <h3 className="text-primary">{item.date}</h3>
                  <div className="py-3">
                    <h4>EDUCATION LEVEL</h4>
                    <p>{item.degree}</p>
                  </div>
                  <div className="py-3">
                    <h4>UNIVERSITY NAME</h4>
                    <p>{item.place}</p>
                  </div>
                  <div className="py-3">
                    <h4>LOCATION</h4>
                    <p>{item.location}</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h4 className="py-3">DESCRIPTION</h4>
                  <p>{item.descripttion}</p>
                  {item.subject ? <h4 className="py-3">SUBJECTS</h4> : ""}
                  <p>{item.subject || ""}</p>
                </div>
              </div>
            );
          })}
          <h2 className="py-3">Skills & Knowledge</h2>
          <img src={skillsImg} className="w-100" alt="skills" />
          <div className="bg-white px-5 pt-5 mx-auto my-5 shadow-lg persSkills">
            <h4>Professional skillset | Personal Branding</h4>
            <div class="d-flex pb-5">
              <ul>
                <li>{skills["Professional_skillset"][0]}</li>
                <li>{skills["Professional_skillset"][1]}</li>
              </ul>
              <ul>
                <li>{skills["Professional_skillset"][2]}</li>
                <li>{skills["Professional_skillset"][3]}</li>
              </ul>
            </div>
            <h4>Languages</h4>
            <div class="d-flex persSkills">
              <ul>
                <li>{skills["Languages"][0]}</li>
                <li>{skills["Languages"][1]}</li>
                <li>{skills["Languages"][2]}</li>
              </ul>
            </div>
            <h4 class="pt-5">
              <b>COURSES</b>
            </h4>
            <div class="d-flex persSkills">
              <ul>
                <li>{skills["COURSES"][0]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
