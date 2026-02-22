import React from "react";

interface Course {
  id: number;
  title: string;
  description: string;
}

const courses: Course[] = [
  { id: 1, title: "PCM", description: "Physics, Chemistry, Mathematics stream for science-focused students." },
  { id: 2, title: "PCB", description: "Physics, Chemistry, Biology stream for medical and life sciences." },
  { id: 3, title: "CBG", description: "Civics, Biology, Geography stream for social and natural sciences." },
  { id: 4, title: "HKL", description: "History, Kiswahili, Literature stream for arts and humanities." },
  { id: 5, title: "CCE", description: "Commerce, Civics, Economics stream for business and finance studies." },
  { id: 6, title: "PML", description: "Physics, Mathematics, Literature stream for mixed science and arts studies." },
  { id: 7, title: "BSE", description: "Biology, Statistics, Economics for bio-statistics and economics careers." },
  { id: 8, title: "GKL", description: "Geography, Kiswahili, Literature for arts and geography-focused students." },
  { id: 9, title: "CMI", description: "Commerce, Mathematics, Informatics for business and IT studies." },
  { id: 10, title: "PBE", description: "Physics, Biology, Economics for applied sciences and economics." },
  { id: 11, title: "HCE", description: "History, Civics, Economics stream for humanities careers." },
  { id: 12, title: "CML", description: "Civics, Mathematics, Literature stream for arts and social sciences." },
  { id: 13, title: "BKL", description: "Biology, Kiswahili, Literature for arts and medical preparatory students." },
  { id: 14, title: "PCB+", description: "Advanced Biology, Chemistry, Physics with research focus." },
];

const CourseDetail: React.FC = () => {
  return (
    <section id="course" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-12">
        Our Courses
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseDetail;