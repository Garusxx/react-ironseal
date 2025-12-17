import "../style/home.css";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <img src={logo} alt="IronSeal Security Logo" className="logo" />

        <h1>IronSeal Security</h1>
        <p className="subtitle">
          Secure file storage and workforce scheduling — built for modern
          companies.
        </p>
      </section>

      <section className="content">
        <div className="card">
          <h2>🔐 Secure File Storage</h2>
          <p>
            IronSeal provides a safe and reliable environment for storing
            sensitive company files. All data is protected using modern security
            standards to ensure confidentiality and integrity.
          </p>
        </div>

        <div className="card">
          <h2>📊 Employee Scheduling</h2>
          <p>
            Easily manage employee schedules, shifts, and availability through a
            clear and intuitive dashboard designed for productivity.
          </p>
        </div>

        <div className="card">
          <h2>🛡️ Built With Security in Mind</h2>
          <p>
            From secure authentication to controlled access, IronSeal focuses on
            protecting both company data and employee information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
