import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Mentors from './pages/About/Mentors/Mentors';
import Careers from './pages/About/Careers/Careers';
import Contact from "./pages/About/Contact/Contact";
import Courses from "./pages/Courses/Courses";
import Enroll_Course from './pages/Courses/Enroll_Course/Enroll_Course';
import UpComing_Course from './pages/Courses/UpComing_Course/UpComing_Course';
import Req_Course from './pages/Courses/Req_Course/Req_Course';
import More from "./pages/More/More";
import Pre_Events from './pages/More/Pre_Events/Pre_Events';
import Founders_Words from './pages/More/Founders_Words/Founders_Words';
import Testimonials from './pages/More/Testimonials/Testimonials';



const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/About" element={<About />} />
       <Route path="/Mentors" element={<Mentors />} />
       <Route path="/Careers" element={<Careers/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Courses" element={<Courses/>} />
        <Route path="/Enroll_Course" element={<Enroll_Course />} />
        <Route path="/ UpComing_Course " element={< UpComing_Course />} />
        <Route path="/Req_Course" element={<Req_Course />} />
        <Route path="/More" element={<More/>} />
        <Route path="/Pre_Events" element={<Pre_Events/>} />
        <Route path="/Founders_Words " element={<Founders_Words />} />
        <Route path="/Testimonials" element={<Testimonials/>} />
      </Routes>
    </Router>
  );
};

export default App;
