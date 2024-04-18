import { useState, useEffect } from "react";
import axios from "axios";
import Ricky from "../images/Ricky.png";
import Vinotha from "../images/Vinotha.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./About.css";

const API_URL = import.meta.env.VITE_API_URL

const designers = [
  {
    id: 10,
    name: "Ricardo Watson",
    age: 32,
    profileImage: "Ricky.png",
    gitHub: "github.jpg",
  },
  {
    id: 11,
    name: "vinotha",
    age: 32,
    profileImage: "Vinotha.jpg",
    gitHub: "github.jpg",
    LinkedIn: "https://www.linkedin.com/in/vinotha-arivalagan-609895258/"
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
    <div>
      <h1>About Us</h1>
      <div className="nav-abt">
        <div className="Ric-abt">
          <img src={Ricky} alt="Ricky" />
          <p>
            My name is Ricardo Watson I am Based in Frankfurt am main, Germany I
            am a Fullstack developer and this is one of the web pages I have
            created along with my businesses partner Vinotha
          </p>
          <div className="alink">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="a" />
            </a>
            <a href="https://github.com">
              <FontAwesomeIcon icon={faGithub} className="a" />
            </a>
          </div>
        </div>

        <div className="vin-abt">
          <img src={Vinotha} alt="Vinotha" />
          <p>
            My name is Vinotha I am Based in Rotterdam, Netherland. I am
            a Fullstack developer and this is one of the web pages I have
            created along with my businesses partner Ricardo
          </p>
          <div className="alink">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="a" />
            </a>
            <a href="https://github.com">
              <FontAwesomeIcon icon={faGithub} className="a" />
            </a>
            <a href="https://www.linkedin.com/in/vinotha-arivalagan-609895258/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="a" />
            </a></div>

        </div>
      </div>
    </div>
  );
};
export default AboutPage;
