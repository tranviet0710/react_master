import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
export default function AboutPage() {
    const location = useLocation();
  const pageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    fontWeight: "bold",
  };
  return (
    <div style={pageContainerStyle}>
      <Link to="/">Go to Home</Link>
      <Link to="/about">Go to About</Link>
    </div>
  )
}
