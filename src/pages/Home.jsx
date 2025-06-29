import React from "react";
import '../styles/Home.css';

const Home = () => {
  const users = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to The Chat Houses</h1>
        <p>Connect with your people!</p>
      </header>

    
    </div>
  );
};

export default Home;