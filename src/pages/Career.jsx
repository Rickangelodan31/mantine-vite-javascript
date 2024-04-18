import React from "react";
import { Link } from "react-router-dom";
import "./Career.css";
const Career = () => {
  return (
    <div className="career">
      <h1>Join Our Team</h1>
      <h2>We are currently hiring for various positions:</h2>
      <ul>
        <div className="position">
          <Link to="/sales-representative"  className="link">
            <li>Sales Representative</li>
            <p>We offer opportunities for both remote and onsite positions.</p>
            <p>Our office locations are in Frankfurt and Netherlands.</p>
            <p>Apply now and be a part of our dynamic team!</p>{" "}
          </Link>
        </div>
        <div className="position">
          <Link to="/marketing-specialist"  className="link">
            <li>Marketing Specialist</li>
            <p>We offer opportunities for both remote and onsite positions.</p>
            <p>Our office locations are in Frankfurt and Netherlands.</p>
            <p>Apply now and be a part of our dynamic team!</p>
          </Link>
        </div>
        <div className="position">
          <Link to="/teaching-assistant"  className="link">
            <li>Teaching Assistant</li>
            <p>We offer opportunities for both remote and onsite positions.</p>
            <p>Our office locations are in Frankfurt and Netherlands.</p>
            <p>Apply now and be a part of our dynamic team!</p>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Career;
