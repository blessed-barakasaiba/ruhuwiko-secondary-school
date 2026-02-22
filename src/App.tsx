import React from "react";
import { Routes, Route } from "react-router-dom";

import bgImage from "./assets/images/bg.avif";
import Contacts from "./components/Contacts";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import Course from "./components/courses";
import CourseDetail from "./components/course_detail";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div
                className="bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div className="bg-black/60">
                  <Hero />
                </div>
              </div>

              <About />
              <Course />
              <Contacts />
              <Footer />
            </>
          }
        />

        {/* Course Detail Page */}
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </>
  );
};

export default App;