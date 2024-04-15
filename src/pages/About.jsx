import React, { useState, useEffect } from "react";
import axios from "axios";
import Ricky from "../images/Ricky.png";
import Vinotha from "../images/Vinotha.jpg";
const API_URL = "http://localhost:4000/Designers";

const Designers = [
  {
    id: 10,
    name: "Ricardo Watson",
    age: 32,
    profileImage: "Ricky.png",
    gitHub: "github.jpg",
  },

  {
    id: 10,
    name: "vinotha",
    age: 32,
    profileImage: "Vinotha.jpg",
    gitHub: "github.jpg",
  },
];

const AboutPage = () => {
  const [about, setAbout] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>About Us</h1>
      <div className="nav-abt">
        <div className="Ric-abt">
          <img src={Ricky} alt="Ricky" />
          <p>
            My name is Ricardo Watson I am Based in Frankfurt am main, Germany I
            am a Fullstack developer and this is one of the web pages I have
            created along with my businesses partner Vinotha
          </p>

          <button type="button">
            <img src="github.jpg" alt="" />
            <a href="https://github.com/Rickangelodan31">Github</a>
          </button>
        </div>

        <div className="vin-abt">
          <img src={Vinotha} alt="Vinotha" />
          <p>
            My name is Vinotha I am Based in Frankfurt am main, Netherland I am
            a Fullstack developer and this is one of the web pages I have
            created along with my businesses partner Ricardo
          </p>
          <button type="button">
            <a href="https://github.com/Rickangelodan31">Github</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
