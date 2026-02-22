import React from "react";

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-12">
        Contact & Admission Information
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Admissions (Form One - 2026)</h3>
            <p className="text-gray-700 leading-relaxed">
              Admissions for the 2026 academic year for Form One are typically handled via interviews held between September and November of the preceding year.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-700">P.O. Box 448, Songea, Tanzania</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">
              +255 762 818 180 <br />
              +255 621 064 022 <br />
              +255 754 636 049
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Email & Website</h3>
            <p className="text-gray-700">
              Email: <a href="mailto:ruhuwkosecschool@gmail.com" className="text-red-600 hover:underline">ruhuwkosecschool@gmail.com</a> <br />
              Website: <a href="https://ruhuwikoschools.ac.tz" target="_blank" className="text-red-600 hover:underline">ruhuwikoschools.ac.tz</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
            <p className="text-gray-700">
              Follow updates on Instagram: <a href="https://www.instagram.com/ruhuwiko_secondary_school" target="_blank" className="text-red-600 hover:underline">Ruhuwiko Secondary School</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
            <p className="text-gray-700">
              Monday – Friday: 7:00 AM – 4:00 PM <br />
              Saturday – Sunday: Closed
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Ruhuwiko Secondary School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.1234567890!2d35.666123!3d-10.678912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef%3A0xabcdef123456!2sRuhuwiko%20Secondary%20School!5e0!3m2!1sen!2stz!4v1680000000000!5m2!1sen!2stz"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;