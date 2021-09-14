import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRouting from "./App-routing";
import NavbarComponent from "./components/navbar";
import Footer from "./components/footer";
import reference from "./assets/reference.mp4";
import recommend from "./assets/recommend.mp4";
// import profile from "./assets/profile.jpg"; -----> put cv here import cv from assets here then put in in person object

function App() {
  let name = "ALI AL-AHMARY";
  let job = "PHARMACIST";
  let person = {
    name,
    job,
    facebook: "",
    twitter: "",
    instagram: "",
    cv: "", //profile -----> put imported cv here,
    reference,
    email: "amressa10@hotmail.com",
    phone: "+966568181081",
  };
  let skills = {
    Professional_skillset: [
      "Entrepreneurial Mindset",
      "Go-to-Market Planning",
      "Teamwork & Collaboration",
      "Digital Analytics",
    ],
    Languages: [
      "English (native)",
      "Spanish (proficient)",
      "French (proficient)",
    ],
    COURSES: ["Leading and Working in high Performing Team"],
  };
  let work = [
    {
      date: "2017 - 2019",
      company: "Sanofi",
      position: "Medical Rep",
      location: "Jeddah",
      descripttion:
        "Promote and sell the company's products Increase product awareness, answer queries, provide advice and introduce new products. Arrange appointments with doctors, pharmacists and hospital medical teams, which may include pre-arranged appointments or regular 'cold' calling",
    },
  ];
  let education = [
    {
      date: "2011 - 2016",
      degree: "Bachelor's Degree In Pharmacy",
      place: "King Abd El-Aziz University",
      location: "Jeddah",
      descripttion:
        "Learn about the research, testing and manufacturing of pharmaceuticals.",
      subject:
        "Organic chemistry Anatomy and physiology Introduction to pharmacology Microbiology Pathophysiology",
    },
    {
      date: "2016 – 2019",
      degree: "Bachelor's Degree In Computer Science",
      place: "Misr University For science and Technology",
      location: "October city",
      descripttion:
        "Bachelor of computer science, Faculty of Information technology, Misr University for science and technology. GPA: 3.49 (Very good). Ranked as the third position of my grade. Graduation project: android security app (Grade: Excellent).",
    },
  ];
  let recommendations = [
    {
      name: "DR. ABDULLAH AL-ZAHRANY",
      position: "Head Of Pharmacology Department",
      company: "Om Al-Qura University",
      video: recommend,
      phone: "123-456-7890",
      mail: "example@email.com",
    },
    {
      name: "FAHAD AL-GHAMDY",
      position: "University Mate",
      company: "Om Al-Qura University",
      video: recommend,
      phone: "123-456-7890",
      mail: "example@email.com",
    },
    {
      name: "ALI AL_QAHTANY",
      position: "Famely Member | Friend",
      company: "Makkah",
      video: recommend,
      phone: "123-456-7890",
      mail: "example@email.com",
    },
  ];
  return (
    <div className="App">
      <NavbarComponent name={name} />
      <BrowserRouter>
        <AppRouting
          person={person}
          skills={skills}
          work={work}
          education={education}
          recommendations={recommendations}
        />
      </BrowserRouter>
      <Footer person={person} />
    </div>
  );
}

export default App;
