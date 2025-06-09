import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Airbnb Replica',
    link: 'https://github.com/ibby-ali2/airbnb-clone',
    desc: 'A clean clone of Airbnb homepage with card layouts using Ruby on Rails, CSS, Bootstrap, and SQLite.'
  },
  {
    title: 'Deliveroo Clone',
    link: 'https://github.com/ibby-ali2/deliveroo-clone',
    desc: 'Food delivery platform with full CRUD, MVC structure, and restaurant database built in Ruby on Rails.'
  },
  {
    title: 'MedFly',
    link: 'https://medfly-lewagon-4a2de7cc09aa.herokuapp.com/',
    desc: 'Full-stack app for drone delivery of medication with mobile-first design and Figma prototypes.'
  }
];

const skills = [
  'Ruby on Rails', 'JavaScript (ES6+)', 'HTML & CSS', 'SQL & PostgreSQL',
  'React', 'Git & GitHub', 'Python & Data Science', 'Figma & UI Design',
  'Heroku Deployment', 'CAD & Mechanical Design'
];

// Hook to detect when element is visible for animation
function useOnScreen(ref) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Refs for sections
  const skillsRef = React.useRef();
  const projectsRef = React.useRef();
  const aboutRef = React.useRef();

  const skillsVisible = useOnScreen(skillsRef);
  const projectsVisible = useOnScreen(projectsRef);
  const aboutVisible = useOnScreen(aboutRef);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&family=Roboto+Mono&display=swap');

        body {
          margin: 0; padding: 0;
          font-family: 'Open Sans', sans-serif;
          background: ${darkMode ? '#121212' : '#f9f7f7'};
          color: ${darkMode ? '#eee' : '#333'};
          transition: background 0.4s ease, color 0.4s ease;
        }
        a {
          color: ${darkMode ? '#80c0ff' : '#0077cc'};
          text-decoration: none;
          transition: color 0.3s ease;
        }
        a:hover {
          color: ${darkMode ? '#c0e0ff' : '#004a99'};
          text-decoration: underline;
        }
        header {
          position: sticky;
          top: 0;
          background: ${darkMode ? '#1e1e1e' : 'white'};
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          padding: 15px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 999;
        }
        header h1 {
          font-size: 1.8rem;
          color: ${darkMode ? '#80c0ff' : '#2a2a72'};
          margin: 0;
        }
        nav a {
          margin-left: 20px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
        }
        nav a:hover {
          color: ${darkMode ? '#c0e0ff' : '#cf6a87'};
        }
        button.toggle {
          background: none;
          border: 2px solid ${darkMode ? '#80c0ff' : '#0077cc'};
          border-radius: 30px;
          padding: 6px 16px;
          font-weight: 600;
          color: ${darkMode ? '#80c0ff' : '#0077cc'};
          cursor: pointer;
          transition: all 0.3s ease;
        }
        button.toggle:hover {
          background: ${darkMode ? '#80c0ff' : '#0077cc'};
          color: ${darkMode ? '#121212' : 'white'};
        }
        main {
          max-width: 900px;
          margin: 40px auto 80px;
          padding: 0 20px;
        }
        section {
          background: ${darkMode ? '#1e1e1e' : 'white'};
          border-radius: 15px;
          padding: 30px 35px;
          margin-bottom: 40px;
          box-shadow: 0 3px 15px rgba(0,0,0,0.07);
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        h2.section-title {
          margin-top: 0;
          margin-bottom: 20px;
          border-bottom: 3px solid ${darkMode ? '#80c0ff' : '#cf6a87'};
          color: ${darkMode ? '#80c0ff' : '#2a2a72'};
          font-size: 2rem;
          font-weight: 700;
          display: inline-block;
          padding-bottom: 6px;
        }
        ul.skills-list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          padding-left: 0;
        }
        ul.skills-list li {
          background: ${darkMode ? '#305e9e' : '#cf6a87'};
          color: white;
          padding: 9px 18px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 3px 7px rgba(207,106,135,0.45);
          user-select: none;
          transition: background 0.3s ease;
        }
        ul.skills-list li:hover {
          background: ${darkMode ? '#5090ff' : '#ee739b'};
        }
        ul.projects-list {
          list-style: none;
          padding-left: 0;
        }
        ul.projects-list li {
          margin-bottom: 24px;
        }
        ul.projects-list a.project-link {
          font-family: 'Roboto Mono', monospace;
          font-weight: 700;
          font-size: 1.2rem;
          color: ${darkMode ? '#80c0ff' : '#0077cc'};
        }
        ul.projects-list a.project-link:hover {
          color: ${darkMode ? '#c0e0ff' : '#004a99'};
          text-decoration: underline;
        }
        .project-desc {
          margin-top: 6px;
          font-style: italic;
          color: ${darkMode ? '#aaa' : '#555'};
          font-size: 1rem;
          max-width: 720px;
        }
        .intro {
          max-width: 720px;
          font-size: 1.15rem;
          line-height: 1.5;
          color: ${darkMode ? '#ddd' : '#444'};
          margin-bottom: 40px;
        }
        footer {
          text-align: center;
          padding: 30px 20px;
          color: ${darkMode ? '#666' : '#999'};
          font-size: 0.9rem;
          border-top: 1px solid ${darkMode ? '#444' : '#ddd'};
        }
        footer a {
          color: ${darkMode ? '#80c0ff' : '#cf6a87'};
          font-weight: 600;
        }
        img.profile-pic {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          border: 3px solid ${darkMode ? '#80c0ff' : '#0077cc'};
          object-fit: cover;
          margin-bottom: 15px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }
        @media (max-width: 600px) {
          ul.skills-list {
            justify-content: center;
          }
          nav a {
            margin-left: 12px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <header>
        <h1>Ibrahim Ali</h1>
        <nav>
          <a href="#skills" onClick={e => {e.preventDefault(); skillsRef.current.scrollIntoView({behavior:'smooth'})}}>Skills</a>
          <a href="#projects" onClick={e => {e.preventDefault(); projectsRef.current.scrollIntoView({behavior:'smooth'})}}>Projects</a>
          <a href="#about" onClick={e => {e.preventDefault(); aboutRef.current.scrollIntoView({behavior:'smooth'})}}>About</a>
          <button className="toggle" onClick={toggleDarkMode}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </nav>
      </header>

      <main>
        <section id="intro" className="visible" style={{textAlign:'center'}}>
          <img
            className="profile-pic"
            src="images/profile.jpeg"
            alt="Photo of Ibrahim Ali"
            loading="lazy"
          />
          <p className="intro">
            Technically strong engineer turned full-stack developer, passionate about clean code, team-driven problem solving, and continuous learning. Currently sharpening skills through the Le Wagon bootcamp.
          </p>
        </section>

        <section
          id="skills"
          ref={skillsRef}
          className={skillsVisible ? 'visible' : ''}
          aria-label="Skills and Technologies"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <ul className="skills-list">
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section
          id="projects"
          ref={projectsRef}
          className={projectsVisible ? 'visible' : ''}
          aria-label="Projects Showcase"
        >
          <h2 className="section-title">Projects Showcase</h2>
          <ul className="projects-list">
            {projects.map(({ title, link, desc }) => (
              <li key={title}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {title}
                </a>
                <p className="project-desc">{desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="about"
          ref={aboutRef}
          className={aboutVisible ? 'visible' : ''}
          aria-label="About Me"
        >
          <h2 className="section-title">About Me</h2>
          <p>
            I’m Ibrahim, a mechanical engineer turned developer combining technical design with modern web technologies. I thrive in team environments, enjoy problem-solving, and am passionate about building impactful software that blends user experience with robust backend logic.
          </p>
        </section>
      </main>

      <footer>
        © 2025 Ibrahim Ali |{' '}
        <a href="https://github.com/ibby-ali2" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{' '}
        |{' '}
        <a href="https://www.linkedin.com/in/ibby-ali/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </footer>
    </>
  );
}

