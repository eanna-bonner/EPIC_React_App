import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <Link id='link' to="/">Home Page</Link>
      <Link id='link' to="/contact">Contact Page</Link>
      <Link id='link' to="/login">Login Page</Link>
      <Link id='link' to="/signup">Sign Up Page</Link>
    </nav>
  );
}