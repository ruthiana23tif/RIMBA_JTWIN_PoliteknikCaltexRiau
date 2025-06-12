import { Link } from "react-router-dom";

export default function Logo({ width = 120, className = "" }) {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img
  src="/img/logoo.png" 
  alt="Glowsphere Logo"
  className="object-contain  h-[50px] w-auto"
/>

    </Link>
  );
}
