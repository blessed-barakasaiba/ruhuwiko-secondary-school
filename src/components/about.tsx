import ruhuwiko from "../assets/images/ruhuwiko.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-8 py-16"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={ruhuwiko}
            alt="Ruhuwiko Secondary School"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Welcome to Ruhuwiko Secondary School
          </h1>

          <p className="text-gray-700 leading-relaxed mb-4">
            Ruhuwiko Secondary School is a co-educational (boys and girls)
            boarding and day school located in Songea, Ruvuma Region.
            It is one of 10 schools in Tanzania owned and operated by the
            Tanzania People's Defence Force (TPDF/JWTZ).
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The school provides education for both Ordinary Level
            (Form 1–4) and Advanced Level (Form 5–6),
            ensuring academic excellence, discipline, and leadership development.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
            <p className="font-semibold text-blue-700 text-lg italic">
              "Elimu, Kazi na Ulinzi"
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We warmly welcome you to be part of our growing family —
            whether as a student, parent, or partner in education.
            Together, let us build a brighter future for our children
            and our nation.
            <span className="block mt-3 font-semibold text-red-600">
              Karibu sana Ruhuwiko Secondary School —
              Where Excellence Meets Integrity.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;