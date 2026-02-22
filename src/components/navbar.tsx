import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tpdf from "../assets/images/tpdf.png";
import ruhuwiko from "../assets/images/ruhuwiko.jpeg";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#course" },
  { label: "Contacts", href: "#contacts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full sticky top-0 z-50">

      {/* ── TOP LOGO BANNER ── */}
      <div
        className={`
          bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950
          flex items-center justify-between gap-4 px-6 md:px-16
          transition-all duration-500 overflow-hidden
          ${scrolled ? "max-h-0 py-0 opacity-0 pointer-events-none" : "max-h-56 py-5 opacity-100"}
        `}
      >
        {/* Left Logo */}
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden
          border-4 border-white/30 shadow-2xl bg-white flex items-center justify-center">
          <img src={tpdf} alt="Tanzania PDF Logo" className="w-full h-full object-cover" />
        </div>

        {/* Center: School Name */}
        <div className="flex-1 text-center px-2">
          <Link to="/" className="inline-block">
            <h1
              className="text-white font-extrabold tracking-wide leading-tight drop-shadow-lg
                text-2xl sm:text-3xl md:text-5xl"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Ruhuwiko Secondary School
            </h1>
            <p className="text-blue-200 text-xs md:text-sm tracking-[0.22em] uppercase mt-1.5 font-semibold">
              Excellence · Integrity · Service
            </p>
          </Link>
        </div>

        {/* Right Logo */}
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden
          border-4 border-white/30 shadow-2xl bg-white flex items-center justify-center">
          <img src={ruhuwiko} alt="Ruhuwiko School Crest" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ── GOLD/RED ACCENT STRIPE ── */}
      <div
        className={`h-1 bg-gradient-to-r from-red-700 via-yellow-400 to-red-700
          transition-all duration-500 ${scrolled ? "h-0 opacity-0" : "opacity-100"}`}
      />

      {/* ── MAIN NAV BAR ── */}
      <div className={`transition-all duration-400 ${scrolled ? "bg-white shadow-lg" : "bg-blue-800 shadow-md"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between">

          {/* Compact logo (scrolled only) */}
          <div className={`flex items-center gap-3 overflow-hidden transition-all duration-400
            ${scrolled ? "w-auto opacity-100 py-2" : "w-0 opacity-0 py-0"}`}>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-red-600 shadow bg-white flex-shrink-0">
              <img src={ruhuwiko} alt="Crest" className="w-full h-full object-cover" />
            </div>
            <span
              className="text-blue-900 font-bold text-sm whitespace-nowrap hidden sm:block"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Ruhuwiko Secondary
            </span>
          </div>

          {/* ── DESKTOP LINKS ── */}
          <ul className="hidden md:flex items-center flex-1 justify-center list-none m-0 p-0 gap-0">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`
                    relative block px-5 py-5 text-sm font-bold tracking-widest uppercase
                    transition-colors duration-200 no-underline group
                    ${scrolled
                      ? activeLink === link.label ? "text-red-600" : "text-blue-900 hover:text-red-600"
                      : activeLink === link.label ? "text-yellow-300" : "text-white/85 hover:text-yellow-300"
                    }
                  `}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`
                      absolute bottom-3 left-5 right-5 h-0.5 rounded-full transition-transform duration-300 origin-center
                      ${scrolled ? "bg-red-600" : "bg-yellow-300"}
                      ${activeLink === link.label ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ml-auto
              ${scrolled ? "text-blue-900 hover:bg-blue-50" : "text-white hover:bg-white/10"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`md:hidden bg-blue-950 overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {/* Mini logos in mobile header */}
        <div className="flex items-center justify-center gap-4 px-6 py-4 border-b border-white/10">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/30 bg-white flex-shrink-0">
            <img src={tpdf} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span
            className="text-white font-bold text-sm text-center flex-1"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Ruhuwiko Secondary School
          </span>
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/30 bg-white flex-shrink-0">
            <img src={ruhuwiko} alt="Crest" className="w-full h-full object-cover" />
          </div>
        </div>

        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => { setActiveLink(link.label); setIsOpen(false); }}
            className={`
              flex items-center px-8 py-3.5 text-sm font-bold tracking-widest uppercase
              border-b border-white/5 transition-all duration-200 no-underline
              ${activeLink === link.label
                ? "text-yellow-300 bg-white/5 pl-10"
                : "text-white/80 hover:text-yellow-300 hover:bg-white/5 hover:pl-10"
              }
            `}
          >
            {link.label}
          </a>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;