import { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://localhost:5239/api/portfolio";

function App() {
  // =====================================================
  // PAGE NAVIGATION
  // =====================================================

  const [page, setPage] = useState("home");

  // =====================================================
// POSTGRESQL API DATA
// =====================================================

const [databasePortfolio, setDatabasePortfolio] = useState(null);
const [apiLoading, setApiLoading] = useState(true);
const [apiError, setApiError] = useState("");

useEffect(() => {
  const getPortfolio = async () => {
    try {
      const response = await fetch(
        "http://localhost:5239/api/portfolio"
      );

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status}`
        );
      }

      const data = await response.json();

      console.log("PostgreSQL Portfolio Data:", data);

      setDatabasePortfolio(
        Array.isArray(data) ? data : []
      );

      setApiError("");

    } catch (error) {
      console.error(
        "Error connecting to PostgreSQL API:",
        error
      );

      setApiError(error.message);

    } finally {
      setApiLoading(false);
    }
  };

  getPortfolio();
}, []);

  // =====================================================
  // EXPORT PORTFOLIO
  // =====================================================

  const handleExport = () => {
    window.open(`${API_URL}/export`, "_blank");
  };

  // =====================================================
  // PORTFOLIO INFORMATION
  // =====================================================

  const [portfolioInfo, setPortfolioInfo] = useState([
    {
      id: 1,
      type: "Experience",
      name: "Junior Tax Database Administrator",
      organization: "Ministry of Revenues",
      category: "Database Administration",
      role: "Junior Tax Database Administrator",
      startDate: "",
      endDate: "",
      level: "Intermediate",
      experience: "2+ years",
      description:
        "Experience supporting database operations, data validation, data integrity, backup and recovery activities, monitoring and IT system support.",
      technologies: "PostgreSQL, Oracle, SIGTAS, EIMS, e-Invoice",
      url: "",
    },
    {
      id: 2,
      type: "Experince",
  name: "Sheger City and Southwest Shewa Education Bureaus",
  organization: "Oromia Education Bureau",
  category: "IT Professional",
  role: "IT Teacher",
  startDate: "2022-09",
  endDate: "2024-09",
  level: "",
  experience: "2 + years",
  description:
    "Worked as an IT Teacher, supporting students in developing practical information technology skills and promoting the effective use of digital technologies in education.",
  technologies: "Information Technology, Computer Applications, Digital Technologies",
  url: "",
    },

    {
      id: 3,
      type: "Organization",
      name: "Junior Tax Database Administrator",
      organization: "Ministry of Revenues",
      category: "Database Administration",
      role: "Junior Tax Database Administrator",
      startDate: "",
      endDate: "",
      level: "Intermediate",
      experience: "2+ years",
      description:
        "Experience supporting database operations, data validation, data integrity, backup and recovery activities, monitoring and IT system support.",
      technologies: "PostgreSQL, Oracle, SIGTAS, EIMS, e-Invoice",
      url: "",
    },
    {
      id: 4,
      type: "Organization",
  name: "Sheger City and Southwest Shewa Education Bureaus",
  organization: "Oromia Education Bureau",
  category: "IT Professional",
  role: "IT Teacher",
  startDate: "2022-09",
  endDate: "2024-09",
  level: "",
  experience: "2 + years",
  description:
    "Worked as an IT Teacher, supporting students in developing practical information technology skills and promoting the effective use of digital technologies in education.",
  technologies: "Information Technology, Computer Applications, Digital Technologies",
  url: "",
    },
    {
      id: 5,
      type: "Skill",
      name: "Database Administration",
      organization: "",
      category: "Database",
      role: "",
      startDate: "",
      endDate: "",
      level: "Intermediate",
      experience: "2+ years",
      description:
        "Database administration, data management, monitoring, backup and recovery and maintaining database integrity.",
      technologies: "PostgreSQL, Oracle, Exadata",
      url: "",
    },

    {
      id: 6,
      type: "Skill",
      name: "IT Project Management",
      organization: "",
      category: "Project Management",
      role: "",
      startDate: "",
      endDate: "",
      level: "Intermediate",
      experience: "",
      description:
        "Project planning, quality management, resource management, risk management, procurement and contract management.",
      technologies: "Project Management",
      url: "",
    },

    {
      id: 7,
      type: "Skill",
      name: "IT Systems",
      organization: "Ministry of Revenue",
      category: "IT",
      role: "DBA",
      startDate: "",
      endDate: "",
      level: "Intermediate",
      experience: "",
      description:
        "Experience and knowledge in enterprise IT systems, databases, infrastructure and information management.",
      technologies: "SIGTAS, EIMS, eLMIS, HCMIS, e-Invoice",
      url: "",
    },

    {
      id: 8,
      type: "Certificate",
      name: "Foundations of Artificial Intelligence",
      organization: "FUSE",
      category: "Artificial Intelligence",
      role: "",
      startDate: "",
      endDate: "",
      level: "",
      experience: "",
      description:
        "Completed Foundations of AI professional training.",
      technologies: "Artificial Intelligence",
      url: "",
    },

    {
      id: 9,
      type: "Certificate",
      name: "Oracle Cloud Infrastructure",
      organization: "Oracle",
      category: "Cloud Computing",
      role: "",
      startDate: "",
      endDate: "",
      level: "",
      experience: "",
      description:
        "Completed professional learning related to Oracle Cloud Infrastructure.",
      technologies: "Oracle Cloud Infrastructure",
      url: "",
    },

    {
      id: 10,
      type: "Certificate",
      name: "Data Science",
      organization: "Coursera",
      category: "Data Science",
      role: "",
      startDate: "",
      endDate: "",
      level: "",
      experience: "",
      description:
        "Completed professional learning in Data Science.",
      technologies: "Data Science",
      url: "",
    },

    {
      id: 11,
      type: "Certificate",
      name: "IBM Database",
      organization: "Coursera",
      category: "Database",
      role: "",
      startDate: "",
      endDate: "",
      level: "",
      experience: "",
      description:
        "Completed professional database-related training.",
      technologies: "Database",
      url: "",
    },

    {
      id: 12,
      type: "Certificate",
      name: "Risk Management",
      organization: "Coursera",
      category: "Project Management",
      role: "",
      startDate: "",
      endDate: "",
      level: "",
      experience: "",
      description:
        "Completed professional learning in project risk management.",
      technologies: "Risk Management",
      url: "",
    },

    {
      id: 13,
      type: "Certificate",
      name: "AWS Cloud Training",
      organization: "Coursera",
      category: "Cloud Computing",
      role: "",
      startDate: "",
      endDate: "",
      level: "",
      experience: "",
      description:
        "Completed professional learning related to AWS cloud technologies.",
      technologies: "AWS",
      url: "",
    },

    {
      id: 14,
      type: "Certificate",
      name: "Microsoft Azure Training",
      organization: "Coursera",
      category: "Cloud Computing",
      role: "",
      startDate: "",
      endDate: "",
      level: "",
      experience: "",
      description:
        "Completed professional learning related to Microsoft Azure.",
      technologies: "Microsoft Azure",
      url: "",
    },

    {
      id: 15,
      type: "Project",
      name: "Unified Data Analytics Framework",
      organization: "Floride University ",
      category: "By online MSc Project Management",
      role: "Project Researcher",
      startDate: "",
      endDate: "",
      level: "",
      experience: "",
      description:
        "Strategic approaches and recommendations for unifying a data analytics framework to enhance pharmaceutical inventory and distribution efficiency in Addis Ababa public health centers.",
      technologies:
        "Data Analytics, eLMIS, HCMIS, Digital Supply Chain Twin",
      url: "",
    },

    {
      id: 16,
      type: "Project",
      name: "Professional Portfolio Website",
      organization: "Personal Project",
      category: "Web Development",
      role: "Developer",
      startDate: "2026-08-01",
      endDate: "",
      level: "",
      experience: "",
      description:
        "A professional portfolio website designed to present professional experience, skills, certificates, projects and achievements.",
      technologies:
        "React, JavaScript, HTML, CSS, PostgreSQL, ASP.NET Core",
      url: "",
    },

    {
      id: 17,
      type: "Project",
      name: "Tax Database Administration System",
      organization: "Ministry of Revenues",
      category: "Database",
      role: "Database Administrator",
      startDate: "",
      endDate: "",
      level: "",
      experience: "",
      description:
        "Database-related activities supporting tax information systems, data integrity, validation, monitoring and database operations.",
      technologies: "PostgreSQL, Oracle, SIGTAS, EIMS",
      url: "",
    },

    {
      id: 18,
      type: "Reward",
      name: "Professional Development Achievement",
      organization: "FUSE / Coursera",
      category: "Professional Development",
      role: "",
      startDate: "",
      endDate: "",
      level: "",
      experience: "",
      description:
        "Recognition through continuous professional development in technology, artificial intelligence, cloud computing and project management.",
      technologies: "AI, Cloud, IT, Project Management",
      url: "",
    },
  ]);

  // =====================================================
  // CONTACT
  // =====================================================

  const [contactMessages, setContactMessages] = useState([]);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // =====================================================
  // LOGIN
  // =====================================================

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loggedInUser, setLoggedInUser] = useState(null);

  // =====================================================
  // PORTFOLIO FORM
  // =====================================================

  const emptyPortfolioForm = {
    type: "",
    name: "",
    organization: "",
    category: "",
    role: "",
    startDate: "",
    endDate: "",
    level: "",
    experience: "",
    description: "",
    technologies: "",
    url: "",
  };

  const [portfolioForm, setPortfolioForm] =
    useState(emptyPortfolioForm);

  const handlePortfolioChange = (e) => {
    setPortfolioForm({
      ...portfolioForm,
      [e.target.name]: e.target.value,
    });
  };

  // =====================================================
  // SAVE PORTFOLIO INFORMATION
  // =====================================================

  const handlePortfolioSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(portfolioForm),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to save information: ${response.status}`
        );
      }

      const savedData = await response.json();

      setPortfolioInfo((previous) => [
        ...previous,
        savedData,
      ]);

      alert("Portfolio information saved successfully!");

      setPortfolioForm(emptyPortfolioForm);

      setPage("admin");
    } catch (error) {
      console.error(error);

      alert(
        "Could not save portfolio information to PostgreSQL."
      );
    }
  };

  // =====================================================
  // CONTACT FORM
  // =====================================================

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      id: contactMessages.length + 1,
      ...contactForm,
      date: new Date().toLocaleString(),
    };

    setContactMessages([
      ...contactMessages,
      newMessage,
    ]);

    alert("Your message has been sent successfully!");

    setContactForm({
      fullname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  // =====================================================
  // LOGIN
  // =====================================================

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      loginData.email === "roberatafesa12@gmail.com" &&
      loginData.password === "123456"
    ) {
      setLoggedInUser({
        name: "Robera Tafese Tekalign",
        email: "roberatafesa12@gmail.com",
        role: "Admin",
      });

      setPage("admin");
    } else {
      alert("Invalid email or password!");
    }
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    setLoggedInUser(null);

    setLoginData({
      email: "",
      password: "",
    });

    setPage("home");
  };

  // =====================================================
  // NAVIGATION
  // =====================================================

  const Navigation = () => (
    <header className="navbar">
      <div
        className="logo"
        onClick={() => setPage("home")}
      >
        Smart Portifolio!
      </div>

      <nav>
        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("about")}>
          About
        </button>

        <button onClick={() => setPage("organizations")}>
          Organizations
        </button>

        <button onClick={() => setPage("experience")}>
          Experience
        </button>

        <button onClick={() => setPage("skills")}>
          Skills
        </button>

        <button onClick={() => setPage("certificates")}>
          Certificates
        </button>

        <button onClick={() => setPage("projects")}>
          Projects
        </button>

        <button onClick={() => setPage("rewards")}>
          Rewards
        </button>

        <button onClick={() => setPage("contact")}>
          Contact
        </button>

        <button
          className="nav-button"
          onClick={() => setPage("login")}
        >
          Admin Login
        </button>
      </nav>
    </header>
  );

  // =====================================================
  // LOGIN PAGE
  // =====================================================

  if (page === "login") {
    return (
      
      <div className="auth-page">
        <div className="auth-box">
          <h1>Robera Login</h1>

          <p>
            Welcome back to Homepage portfolio!
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              }
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
              required
            />

            <button
              type="submit"
              className="primary-btn"
            >
              Login
            </button>
          </form>

          <button
            className="back-btn"
            onClick={() => setPage("home")}
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  // =====================================================
  // ADD INFORMATION
  // =====================================================

  if (page === "addInfo") {
    return (
      <div className="auth-page">
        <div className="auth-box large-box">
          <h1>Add Portfolio Information</h1>

          <form onSubmit={handlePortfolioSubmit}>
            <label>Information Type</label>

            <select
              name="type"
              value={portfolioForm.type}
              onChange={handlePortfolioChange}
              required
            >
              <option value="">
                Select Information Type
              </option>

              <option value="Organization">
                Organization
              </option>

              <option value="Experience">
                Experience
              </option>

              <option value="Skill">
                Skill
              </option>

              <option value="Certificate">
                Certificate
              </option>

              <option value="Project">
                Project
              </option>

              <option value="Reward">
                Reward / Achievement
              </option>
            </select>

            <input
              type="text"
              name="name"
              placeholder="Name / Title"
              value={portfolioForm.name}
              onChange={handlePortfolioChange}
              required
            />

            <input
              type="text"
              name="organization"
              placeholder="Organization / Company"
              value={portfolioForm.organization}
              onChange={handlePortfolioChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={portfolioForm.category}
              onChange={handlePortfolioChange}
            />

            <input
              type="text"
              name="role"
              placeholder="Job / Role"
              value={portfolioForm.role}
              onChange={handlePortfolioChange}
            />

            <label>Start Date</label>

            <input
              type="date"
              name="startDate"
              value={portfolioForm.startDate}
              onChange={handlePortfolioChange}
            />

            <label>End Date</label>

            <input
              type="date"
              name="endDate"
              value={portfolioForm.endDate}
              onChange={handlePortfolioChange}
            />

            <select
              name="level"
              value={portfolioForm.level}
              onChange={handlePortfolioChange}
            >
              <option value="">
                Select Skill Level
              </option>

              <option value="Beginner">
                Beginner
              </option>

              <option value="Intermediate">
                Intermediate
              </option>

              <option value="Advanced">
                Advanced
              </option>

              <option value="Expert">
                Expert
              </option>
            </select>

            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={portfolioForm.experience}
              onChange={handlePortfolioChange}
            />

            <input
              type="text"
              name="technologies"
              placeholder="Technologies Used"
              value={portfolioForm.technologies}
              onChange={handlePortfolioChange}
            />

            <input
              type="url"
              name="url"
              placeholder="Website / Certificate / Project URL"
              value={portfolioForm.url}
              onChange={handlePortfolioChange}
            />

            <textarea
              name="description"
              placeholder="Description / Responsibilities / Achievements"
              value={portfolioForm.description}
              onChange={handlePortfolioChange}
              rows="5"
            />

            <button
              type="submit"
              className="primary-btn"
            >
              Save Information
            </button>
          </form>

          <button
            className="back-btn"
            onClick={() => setPage("admin")}
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // =====================================================
  // ADMIN DASHBOARD
  // =====================================================

  if (page === "admin") {
    return (
      <div className="admin-page">
        <header className="admin-navbar">
          <div className="admin-logo">
            Smart Web
          </div>

          <div>
            <span className="admin-user">
              👤 {loggedInUser?.name}
            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </header>

        <main className="admin-content">
          <h1>Portfolio Dashboard</h1>

          <p>
          Highlighting Robera's professional IT experience, 
          technical expertise, projects, certifications, 
          and career achievements.
          </p>


          {/* ADD */}

          <button
            className="primary-btn"
            onClick={() => setPage("addInfo")}
          >
            + Add Portfolio Information
          </button>

          {/* PORTFOLIO TABLE */}

          <div className="users-section">
            <h2>Portfolio Information</h2>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Organization</th>
                    <th>Category</th>
                    <th>Role</th>
                    <th>Experience</th>
                  </tr>
                </thead>

                <tbody>
                  {portfolioInfo.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.type}</td>
                      <td>{item.name}</td>
                      <td>{item.organization}</td>
                      <td>{item.category}</td>
                      <td>{item.role}</td>
                      <td>{item.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CONTACT MESSAGES */}

          <div className="users-section">
            <h2>Contact Messages</h2>

            {contactMessages.length === 0 ? (
              <p>No contact messages yet.</p>
            ) : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Subject</th>
                      <th>Message</th>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {contactMessages.map(
                      (message) => (
                        <tr key={message.id}>
                          <td>{message.id}</td>
                          <td>{message.name}</td>
                          <td>{message.email}</td>
                          <td>{message.phone}</td>
                          <td>{message.subject}</td>
                          <td>{message.message}</td>
                          <td>{message.date}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }

  // =====================================================
  // HOME
  // =====================================================

  if (page === "home") {
    return (
      <div className="website">
        
        <Navigation />

        <section className="hero">
          <div className="hero-content">
            <p className="welcome">
              WELCOME TO ROBERA PORTFOLIO!
            </p>

            <h1>
              Driving Digital Transformation
              with Innovative IT Solutions
              <br />
              <span>
                Technology • Creativity • Growth
              </span>
            </h1>

            <p className="hero-text">
              I am an IT professional with expertise
              in database administration, information
              technology, web development, cloud
              technologies, and IT project management.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => setPage("about")}
              >
                Explore Portfolio
              </button>

              <button
                className="secondary-btn"
                onClick={() => setPage("contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <h3>Robera T. Portfolio</h3>

            <p>
              Transforming technology, data,
              and ideas into smarter solutions!
            </p>
          </div>

          <div className="copyright">
            © 2026 Robera T. Portfolio. All Rights Reserved.
          </div>
        </footer>
      </div>
    );
  }

  // =====================================================
  // ABOUT
  // =====================================================

  if (page === "about") {
    return (
      <div className="website">
        <Navigation />

        <section className="section">
          <div className="section-title">
            <p>WELCOME TO ROBERA TAFESE PORTIFOLIO!</p>

            <h2>About Me</h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <h3>
                Creating Smarter Digital Solutions
              </h3>

              <p>
                I am a dedicated IT professional with
                expertise in Computer Science and Project
                Management, focused on leveraging
                technology, problem-solving, and strategic
                thinking to build effective solutions and
                support digital transformation.
              </p>

              <p>
                My professional interests span database
                administration, web development, cloud
                technologies, IT systems, artificial
                intelligence, and project management.
              </p>

              <p>
                I am passionate about leveraging technology
                and data to improve organizational efficiency,
                enable data-driven decision-making, and
                support successful digital transformation.
              </p>
            </div>

            <div className="about-box">
              <div className="stat">
                <h3>
                  {
                    portfolioInfo.filter(
                      (item) =>
                        item.type === "Project"
                    ).length
                  }
                </h3>
                <p>Projects</p>
              </div>

              <div className="stat">
                <h3>
                  {
                    portfolioInfo.filter(
                      (item) =>
                        item.type === "Skill"
                    ).length
                  }
                </h3>
                <p>Skills</p>
              </div>

              <div className="stat">
                <h3>
                  {
                    portfolioInfo.filter(
                      (item) =>
                        item.type === "Certificate"
                    ).length
                  }
                </h3>
                <p>Certificates</p>
              </div>

              <div className="stat">
                <h3>
                  {
                    portfolioInfo.filter(
                      (item) =>
                        item.type === "Experience"
                    ).length
                  }
                </h3>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // =====================================================
  // ORGANIZATIONS
  // =====================================================

  if (page === "organizations") {
    const organizations =
      portfolioInfo.filter(
        (item) => item.type === "Organization"
      );

    return (
      <div className="website">
        <Navigation />

        <section className="section">
          <div className="section-title">
            <p>PROFESSIONAL BACKGROUND</p>
            <h2>Organizations</h2>
          </div>

          <div className="services">
            {organizations.map((item) => (
              <div
                className="service-card"
                key={item.id}
              >
                <div className="service-icon">
                  🏢
                </div>

                <h3>{item.name}</h3>

                <p>
                  <strong>Organization:</strong>{" "}
                  {item.organization}
                </p>

                <p>
                  <strong>Role:</strong>{" "}
                  {item.role}
                </p>

                <p>{item.description}</p>

                <p>
                  <strong>Technologies:</strong>{" "}
                  {item.technologies}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // =====================================================
  // EXPERIENCE
  // =====================================================

  if (page === "experience") {
    const experiences =
      portfolioInfo.filter(
        (item) => item.type === "Experience"
      );

    return (
      <div className="website">
        <Navigation />

        <section className="section">
          <div className="section-title">
            <p>MY CAREER</p>
            <h2>Professional Experience</h2>
          </div>

          <div className="services">
            {experiences.map((item) => (
              <div
                className="service-card"
                key={item.id}
              >
                <div className="service-icon">
                  💼
                </div>

                <h3>{item.name}</h3>

                <p>
                  <strong>Organization:</strong>{" "}
                  {item.organization}
                </p>

                <p>
                  <strong>Role:</strong>{" "}
                  {item.role}
                </p>

                <p>
                  <strong>Experience:</strong>{" "}
                  {item.experience}
                </p>

                <p>{item.description}</p>

                <p>
                  <strong>Technologies:</strong>{" "}
                  {item.technologies}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // =====================================================
  // SKILLS
  // =====================================================

  if (page === "skills") {
    const skills =
      portfolioInfo.filter(
        (item) => item.type === "Skill"
      );

    return (
      <div className="website">
        <Navigation />

        <section className="section">
          <div className="section-title">
            <p>EXPERTISE</p>
            <h2>Professional Skills</h2>
          </div>

          <div className="services">
            {skills.map((item) => (
              <div
                className="service-card"
                key={item.id}
              >
                <div className="service-icon">
                  💻
                </div>

                <h3>{item.name}</h3>

                <p>
                  <strong>Category:</strong>{" "}
                  {item.category}
                </p>

                <p>
                  <strong>Level:</strong>{" "}
                  {item.level}
                </p>

                <p>
                  <strong>Experience:</strong>{" "}
                  {item.experience}
                </p>

                <p>{item.description}</p>

                <p>
                  <strong>Technologies:</strong>{" "}
                  {item.technologies}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // =====================================================
  // CERTIFICATES
  // =====================================================

  if (page === "certificates") {
    const certificates =
      portfolioInfo.filter(
        (item) => item.type === "Certificate"
      );

    return (
      <div className="website">
        <Navigation />

        <section className="section">
          <div className="section-title">
            <p>PROFESSIONAL DEVELOPMENT</p>
            <h2>Certificates</h2>
          </div>

          <div className="services">
            {certificates.map((item) => (
              <div
                className="service-card"
                key={item.id}
              >
                <div className="service-icon">
                  🏆
                </div>

                <h3>{item.name}</h3>

                <p>
                  <strong>Issued by:</strong>{" "}
                  {item.organization}
                </p>

                <p>{item.description}</p>

                <p>
                  <strong>Area:</strong>{" "}
                  {item.technologies}
                </p>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // =====================================================
  // PROJECTS
  // =====================================================

  if (page === "projects") {
    const projects =
      portfolioInfo.filter(
        (item) => item.type === "Project"
      );

    return (
      <div className="website">
        <Navigation />

        <section className="section">
          <div className="section-title">
            <p>MY WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="project-grid">
            {projects.map((item) => (
              <div
                className="project-card"
                key={item.id}
              >
                <div className="project-image">
                  PROJECT
                </div>

                <div className="project-content">
                  <h3>{item.name}</h3>

                  <p>
                    <strong>Organization:</strong>{" "}
                    {item.organization}
                  </p>

                  <p>
                    <strong>Role:</strong>{" "}
                    {item.role}
                  </p>

                  <p>{item.description}</p>

                  <p>
                    <strong>Technologies:</strong>{" "}
                    {item.technologies}
                  </p>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // =====================================================
  // REWARDS
  // =====================================================

  if (page === "rewards") {
    const rewards =
      portfolioInfo.filter(
        (item) => item.type === "Reward"
      );

    return (
      <div className="website">
        <Navigation />

        <section className="section">
          <div className="section-title">
            <p>ACHIEVEMENTS</p>
            <h2>Rewards & Achievements</h2>
          </div>

          <div className="services">
            {rewards.map((item) => (
              <div
                className="service-card"
                key={item.id}
              >
                <div className="service-icon">
                  🥇
                </div>

                <h3>{item.name}</h3>

                <p>
                  <strong>Organization:</strong>{" "}
                  {item.organization}
                </p>

                <p>{item.description}</p>

                <p>
                  <strong>Area:</strong>{" "}
                  {item.technologies}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // =====================================================
  // CONTACT
  // =====================================================

  if (page === "contact") {
    return (
      <div className="website">
        <Navigation />

        <section className="contact section">
          <div className="section-title">
            <p>GET IN TOUCH</p>
            <h2>Contact Me</h2>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's Work Together</h3>

              <p>
                Have a project, question or
                professional opportunity?
                Send me a message.
              </p>

              <div className="contact-item">
                <strong>📧 Email</strong>
                <p>
                  roberatafesa12@gmail.com
                </p>
              </div>

              <div className="contact-item">
                <strong>📞 Phone</strong>
                <p>
                  +251 918 901 038
                </p>
              </div>

              <div className="contact-item">
                <strong>📍 Location</strong>
                <p>
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleContactSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={handleContactChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={handleContactChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={contactForm.phone}
                onChange={handleContactChange}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={contactForm.subject}
                onChange={handleContactChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={contactForm.message}
                onChange={handleContactChange}
                rows="6"
                required
              />

              <button
                type="submit"
                className="primary-btn"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <h3>Robera T. Portfolio</h3>

            <p>
              Professional IT, database,
              technology and project management
              portfolio.
            </p>
          </div>

          <div className="copyright">
            © 2026 Robera T. Portfolio. All Rights Reserved.
          </div>
        </footer>
      </div>
    );
  }

  return null;
}

export default App;