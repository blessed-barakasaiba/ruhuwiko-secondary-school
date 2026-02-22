import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/bg2.jpg"
import image2 from "../assets/images/bg1.jpg"

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "O-Level",
    description: "Form 1–4 core subjects.",
    image: image1,
  },
  {
    id: 2,
    title: "A-Level",
    description: "Form 5–6 specialized streams.",
    image: image2,
  },
];

const Courses: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16" id="course">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-12">
        Our Courses
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button
                onClick={() => navigate(`/courses/${course.id}`)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;