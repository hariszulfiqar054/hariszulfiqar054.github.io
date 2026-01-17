import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowDown,
  Sparkles,
  Zap,
  Coffee,
  Code2,
  Rocket,
  Terminal,
  ChevronRight,
} from "lucide-react";

// Floating shapes component
const FloatingShapes = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
    <div className="absolute top-20 left-10 w-20 h-20 bg-lime-400 rounded-full opacity-20 animate-float" />
    <div className="absolute top-40 right-20 w-32 h-32 bg-orange-400 rotate-45 opacity-20 animate-float-delayed" />
    <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-cyan-400 opacity-20 animate-float" />
    <div className="absolute top-1/3 right-1/3 w-24 h-24 border-4 border-lime-400 rounded-full opacity-20 animate-spin-slow" />
    <div className="absolute bottom-20 right-10 w-12 h-12 bg-pink-400 opacity-20 animate-float-delayed" />
  </div>
);

// Cursor follower
const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-64 h-64 rounded-full pointer-events-none -z-5 transition-all duration-300 ease-out hidden md:block"
      style={{
        left: position.x - 128,
        top: position.y - 128,
        background:
          "radial-gradient(circle, rgba(163,230,53,0.15) 0%, transparent 70%)",
      }}
    />
  );
};

// Marquee component
const Marquee = ({ children, reverse = false }) => (
  <div className="overflow-hidden whitespace-nowrap py-4 bg-black text-white border-y-4 border-lime-400">
    <div
      className={`inline-flex gap-8 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="flex items-center gap-8 text-2xl font-black tracking-wider"
        >
          {children}
        </span>
      ))}
    </div>
  </div>
);

// Navigation
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-black tracking-tighter group"
        >
          <span className="group-hover:text-lime-500 transition-colors">
            HARIS
          </span>
          <span className="text-lime-500 group-hover:text-black transition-colors">
            .
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["about", "experience", "skills", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-bold uppercase text-sm tracking-wider hover:text-lime-500 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a
            href="https://github.com/hariszulfiqar054"
            target="_blank"
            className="p-2 hover:bg-lime-400 rounded-full transition-colors"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative w-8 h-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`absolute left-0 h-0.5 w-8 bg-black transition-all ${
              menuOpen ? "top-3 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-0.5 w-8 bg-black transition-all ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-8 bg-black transition-all ${
              menuOpen ? "top-3 -rotate-45" : "top-6"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          {["about", "experience", "skills", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-bold uppercase text-left py-2 hover:text-lime-500 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20">
    <div className="max-w-7xl mx-auto w-full">
      <div className="space-y-6">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 font-mono text-sm font-bold animate-bounce-slow">
          <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
          AVAILABLE FOR WORK
        </div>

        {/* Main Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none">
            MUHAMMAD
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-500 to-emerald-500 animate-gradient">
            HARIS
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-xl">
          Full Stack Engineer turning{" "}
          <span className="text-black font-bold inline-flex items-center gap-1">
            <Coffee size={20} className="text-orange-500" /> caffeine
          </span>{" "}
          into{" "}
          <span className="text-black font-bold inline-flex items-center gap-1">
            <Code2 size={20} className="text-lime-500" /> code
          </span>{" "}
          since 2020.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <a
            href="#contact"
            className="group bg-lime-400 text-black px-8 py-4 font-bold text-lg flex items-center gap-2 border-2 border-black transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:bg-lime-300"
          >
            Let's Talk
            <Rocket
              size={20}
              className="group-hover:rotate-45 transition-transform"
            />
          </a>
          <a
            href="https://github.com/hariszulfiqar054"
            target="_blank"
            className="group border-2 border-black px-8 py-4 font-bold text-lg flex items-center gap-2 hover:bg-gray-100 transition-all duration-300"
          >
            <Github size={20} />
            GitHub
            <ExternalLink size={16} className="opacity-50" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} className="text-gray-400" />
      </div>
    </div>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-lime-500 font-mono font-bold">01. ABOUT</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            A boy who loves to play around with{" "}
            <span className="text-lime-500">code</span>.
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Hello! I'm Haris, a Full Stack Engineer based in{" "}
              <span className="font-bold text-black">Lahore, Pakistan</span>. I
              graduated from COMSATS University with a BS in Computer Science.
            </p>
            <p>
              I specialize in diving deep into complex problems and emerging
              with solutions that actually work. Currently building cool stuff
              at <span className="font-bold text-black">Calo Inc</span>.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {[
              { num: "5+", label: "Years Exp" },
              { num: "42", label: "Repos" },
              { num: "1K+", label: "Commits" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 border-2 border-black bg-white shadow-[4px_4px_0px_#a3e635]"
              >
                <div className="text-3xl font-black">{stat.num}</div>
                <div className="text-sm font-bold text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-lime-400 to-green-500 p-8 shadow-[12px_12px_0px_#000] transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white p-6 -rotate-1">
              <h3 className="font-black text-2xl mb-4 flex items-center gap-2">
                <Sparkles className="text-yellow-500" /> Fun Facts
              </h3>
              <ul className="space-y-3">
                {[
                  "☕ Powered by excessive caffeine",
                  "🎯 AWS Certified Developer",
                  "🏆 2020 Employee of the Year",
                  "🥇 Hackathon Winner 2018",
                  "❄️ Arctic Code Vault Contributor",
                ].map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 font-medium">
                    <ChevronRight
                      size={20}
                      className="text-lime-500 flex-shrink-0 mt-0.5"
                    />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
// Experience Section
const Experience = () => {
  const jobs = [
    {
      company: "Calo Inc",
      role: "Full Stack Engineer",
      period: "Dec 2022 - Present",
      location: "Bahrain",
      color: "bg-lime-400",
      achievements: [
        "Boosted revenue by 20% through add-ons & subscription revamp",
        "Slashed release candidate time by 60% with E2E testing",
        "Built menu generation algorithm with 90% accuracy",
        "Saved CX team 10+ hours weekly",
      ],
    },
    {
      company: "Retailo Technologies",
      role: "Full Stack Engineer",
      period: "May 2021 - Nov 2022",
      location: "Lahore, PK",
      color: "bg-cyan-400",
      achievements: [
        "Made React Native app 40% faster",
        "Increased conversions by 20% with BNPL feature",
        "Led design system across 5 products",
      ],
    },
    {
      company: "Skylinx Technologies",
      role: "Software Engineer",
      period: "Apr 2020 - May 2021",
      location: "Lahore, PK",
      color: "bg-orange-400",
      achievements: [
        "Led team of 4 React Native Engineers",
        "Set up CI/CD for backend & mobile apps",
        "Employee of the Year 🏆",
      ],
    },
    {
      company: "9Exgen Solutions",
      role: "React Native Engineer",
      period: "Jan 2020 - Mar 2020",
      location: "Lahore, PK",
      color: "bg-pink-400",
      achievements: [
        "Built Dukandar app from scratch",
        "Integrated QR & local payment options",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(163,230,53,0.1) 50px,
            rgba(163,230,53,0.1) 51px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(163,230,53,0.1) 50px,
            rgba(163,230,53,0.1) 51px
          )`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-lime-400 font-mono font-bold">
            02. EXPERIENCE
          </span>
          <div className="flex-1 h-px bg-gray-800" />
        </div>

        <h2 className="text-4xl md:text-6xl font-black mb-16">
          Where I've <span className="text-lime-400">worked</span>
        </h2>

        <div className="space-y-8">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-900 p-8 border border-gray-800 hover:border-lime-400 transition-all duration-300"
            >
              <div
                className={`absolute top-0 left-0 w-2 h-full ${job.color}`}
              />

              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black group-hover:text-lime-400 transition-colors">
                    {job.company}
                  </h3>
                  <p className="text-gray-400 font-medium">{job.role}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="font-mono text-lime-400">{job.period}</p>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>
              </div>

              <ul className="grid md:grid-cols-2 gap-3">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <Zap
                      size={16}
                      className="text-lime-400 flex-shrink-0 mt-1"
                    />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Go", "Python", "SQL"],
      icon: "🔤",
    },
    {
      title: "Frontend",
      skills: ["React", "React Native", "Redux", "Tailwind CSS", "Next.js"],
      icon: "🎨",
    },
    {
      title: "Backend",
      skills: ["Node.js", "NestJS", "GraphQL", "REST APIs", "Microservices"],
      icon: "⚙️",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Serverless", "CI/CD", "Firebase"],
      icon: "☁️",
    },
    {
      title: "Databases",
      skills: ["DynamoDB", "PostgreSQL", "Redis", "MongoDB"],
      icon: "🗄️",
    },
    {
      title: "Tools",
      skills: ["Git", "Jest", "Detox", "Socket.IO", "RabbitMQ"],
      icon: "🔧",
    },
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-lime-500 font-mono font-bold">03. SKILLS</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <h2 className="text-4xl md:text-6xl font-black mb-16">
          Tech Stack I <span className="text-lime-500">use</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group p-6 border-2 border-black bg-white hover:bg-lime-400 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-black mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 group-hover:bg-white text-sm font-bold transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => (
  <section id="contact" className="py-32 px-6 bg-lime-400">
    <div className="max-w-7xl mx-auto text-center">
      <span className="font-mono font-bold text-black/60">04. CONTACT</span>

      <h2 className="text-4xl md:text-7xl font-black mt-4 mb-8">
        Let's Build Something{" "}
        <span className="underline decoration-wavy decoration-black underline-offset-8">
          Amazing
        </span>
      </h2>

      <p className="text-xl text-black/70 max-w-2xl mx-auto mb-12">
        Currently open to freelance projects and remote opportunities. Have an
        idea? Let's make it happen!
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a
          href="mailto:hariszulfiqar054@gmail.com"
          className="group bg-lime-500 text-black px-10 py-5 font-bold text-xl flex items-center gap-3 border-2 border-black hover:bg-lime-400 transition-all duration-300 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:-translate-y-1"
        >
          <Mail className="group-hover:rotate-12 transition-transform" />
          Say Hello
        </a>

        <div className="flex gap-4">
          <a
            href="https://github.com/hariszulfiqar054"
            target="_blank"
            className="p-4 bg-lime-500 text-black border-2 border-black hover:bg-lime-400 transition-all duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-haris-47511216b"
            target="_blank"
            className="p-4 bg-lime-500 text-black border-2 border-black hover:bg-lime-400 transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>

      <p className="mt-12 font-mono text-sm text-black/50">
        hariszulfiqar054@gmail.com • Lahore, Pakistan
      </p>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-black text-white py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Terminal size={20} className="text-lime-400" />
        <span className="font-mono text-sm text-gray-400">
          Designed & Built by Muhammad Haris © {new Date().getFullYear()}
        </span>
      </div>
      <div className="font-mono text-sm text-gray-500">
        Made with <span className="text-lime-400">♥</span> and lots of ☕
      </div>
    </div>
  </footer>
);

// Main App
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-black text-white animate-pulse">
            HARIS<span className="text-lime-400">.</span>
          </div>
          <div className="mt-4 w-48 h-1 bg-gray-800 mx-auto overflow-hidden">
            <div className="h-full bg-lime-400 animate-loading-bar" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black selection:bg-lime-400 selection:text-black overflow-x-hidden">
      <CursorGlow />
      <FloatingShapes />
      <Nav />
      <Hero />
      <Marquee>
        <span>REACT</span>
        <span className="text-lime-400">★</span>
        <span>NODE.JS</span>
        <span className="text-lime-400">★</span>
        <span>TYPESCRIPT</span>
        <span className="text-lime-400">★</span>
        <span>AWS</span>
        <span className="text-lime-400">★</span>
        <span>REACT NATIVE</span>
        <span className="text-lime-400">★</span>
        <span>GRAPHQL</span>
        <span className="text-lime-400">★</span>
      </Marquee>
      <About />
      <Experience />
      <Skills />
      <Marquee reverse>
        <span>FULL STACK</span>
        <span className="text-orange-400">✦</span>
        <span>SCALABLE</span>
        <span className="text-orange-400">✦</span>
        <span>PERFORMANT</span>
        <span className="text-orange-400">✦</span>
        <span>CLEAN CODE</span>
        <span className="text-orange-400">✦</span>
        <span>PROBLEM SOLVER</span>
        <span className="text-orange-400">✦</span>
      </Marquee>
      <Contact />
      <Footer />
    </div>
  );
}
