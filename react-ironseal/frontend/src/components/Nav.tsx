import { Link } from "react-router-dom";
import "../style/nav.css"

export default function Nav() {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}