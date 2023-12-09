import React from 'react'

export default function Home() {
  return (
    <div>
  <title>IT Solutions for Your Business | Acme IT Solutions</title>
  <link rel="stylesheet" href="style.css" />
  <header>
    <nav className="navbar">
      <a href="/" className="logo">Acme IT Solutions</a>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>

    <div className="hero-section">
      <h1>Empowering Businesses with Innovative IT Solutions</h1>
      <p>Acme IT Solutions is your trusted partner for comprehensive IT services, tailored to meet your business needs.</p>
      <a href="/" className="cta-btn">Get a Free Consultation</a>
    </div>
  </header>

  <main>
    <section className="services">
      <h2>Our Services</h2>
      <p>We offer a wide range of IT services to help your business thrive in the digital age.</p>

      <div className="service-cards">
        <div className="service-card">
          <i className="fas fa-server"></i>
          <h3>IT Infrastructure Management</h3>
          <p>We provide comprehensive IT infrastructure management, ensuring your systems are always up and running.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-cloud"></i>
          <h3>Cloud Solutions</h3>
          <p>We help you migrate to the cloud and leverage its power for enhanced efficiency and scalability.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-shield-alt"></i>
          <h3>Cybersecurity</h3>
          <p>We protect your business from cyber threats with robust security solutions and strategies.</p>
        </div>
      </div>
    </section>

    <section className="projects">
      <h2>Our Projects</h2>
      <p>We have a proven track record of delivering successful IT projects for businesses of all sizes.</p>

      <div className="project-cards">
        <div className="project-card">
          <img src="project1.jpg" alt="Project 1" />
          <h3>Project Title</h3>
          <p>Brief project description highlighting key achievements.</p>
        </div>

        <div className="project-card">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project Title</h3>
          <p>Brief project description highlighting key achievements.</p>
        </div>

        <div className="project-card">
          <img src="project3.jpg" alt="Project 3" />
          <h3>Project Title</h3>
          <p>Brief project description highlighting key achievements.</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div className="footer-content">
      <p>Copyright &copy; 2023 Acme IT Solutions</p>
      <ul className="social-links">
        <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
        <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
      </ul>
    </div>
  </footer>

  <script src="script.js"></script>

    </div>
  )
}
