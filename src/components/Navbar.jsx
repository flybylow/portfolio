import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <Link to="/" className="text-white mx-2">Home</Link>
      <Link to="/about" className="text-white mx-2">About</Link>
      <Link to="/project/1" className="text-white mx-2">Work</Link>
      <Link to="/contact" className="text-white mx-2">Resume</Link>
    </nav>
  );
} 