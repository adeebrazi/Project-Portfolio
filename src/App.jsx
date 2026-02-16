import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const headings = [
    "Artificial Intelligence & Data Science",
    "Full-Stack Web Developer",
    "UI/UX Designer",
    "Graphics Designer"
  ];

  // This handles the typewriter logic from your main.js
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % headings.length;
      const fullText = headings[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 60 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div className={isLightTheme ? 'light-theme' : ''}>
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="adeeb">Adeeb</span><span className="razi">Razi</span>
        </a>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#rcv">Resume/CV</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={() => setIsLightTheme(!isLightTheme)} className="theme-toggle">
          <i className={`fas ${isLightTheme ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>
            <span id="typewriter-heading">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p>Building Digital Experiences That Merge Creativity With Technology.</p>
          <p className="highlight">
            I am <span className="razi">Adeeb Razi</span>, a technology professional with a keen interest in Artificial Intelligence, Data Science, and full-stack web development.
          </p>
          <a href="#contact" className="cta-button">Let's Connect</a>
        </div>
        <div className="hero-image">
          <img src="/profile.jpg" alt="profile" className="profile-image" />
        </div>
      </section>
      
      <section id="skills" className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
            <div className="skill-card">
                <i className="fas fa-code"></i>
                <h3>Frontend Development</h3>
                <p>Html5, CSS3, JavaScript, BootStrap</p>
            </div>
            <div className="skill-card">
                <i className="fa-solid fa-terminal"></i>
                <h3>Backend Development</h3>
                <p>JavaScript, Python, Django, C++</p>
            </div>
            <div className="skill-card">
                <i className="fas fa-paint-brush"></i>
                <h3>UI/UX Design</h3>
                <p>Adobe XD</p>
            </div>
        </div>
      </section>

      <section id="experience" className="skills">
        <h2>Work Experience</h2>
        <div className="skills-grid">
            <div className="skill-card">
                <i className="fa-solid fa-flask"></i>
                <h3>Rise Earth Infracon Pvt Ltd</h3>
                <p>IT Manager - Managing Company's Website, LinkedIn & More.</p>
            </div>
            <div className="skill-card">
                <i className="fa-solid fa-drum-steelpan"></i>
                <h3>Shree Shyam Steels</h3>
                <p>IT Head - Leading Company Basic IT Works.</p>
            </div>
            <div className="skill-card">
                <i className="fas fa-code"></i>
                <h3>PaulTech Software Services</h3>
                <p>Full Stack Web Development (2025 Internship).</p>
            </div>
        </div>
      </section>

      <section id="rcv" className="skills">
        <h2>Resume/CV</h2>
        <div className="skills-grid">
            <a href="/Adeeb Razi Resume.pdf" target="_blank" className="skill-card" style={{textDecoration: 'none'}}>
                <i className="fas fa-file-pdf"></i>
                <h3>Resume</h3>
                <p>Click To View Resume</p>
            </a>
        </div>
      </section>
      <footer>
        <p>&copy; 2025 RaziAdeeb. All rights reserved.</p>
        <div className="social-links" id="contact">
            <a href="https://github.com/adeebrazi" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/raziadeeb/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://api.whatsapp.com/send/?phone=916206782574" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/raziadeeb/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com/raziadeeb/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;