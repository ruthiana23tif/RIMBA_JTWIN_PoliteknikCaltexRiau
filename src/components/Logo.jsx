import { Link } from "react-router-dom";

export default function Logo({ width = 120, className = "" }) {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img
        src="/img/logo.png" 
        alt="Glowsphere Logo"
        width={width}
        className="object-contain"
      />
    </Link>
  );
}
