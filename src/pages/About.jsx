import React, { useState } from "react";

const API_URL = "http://localhost:4000";

const AboutPage = () => {
  const [about, setAbout] = useState("");

  return (
    <><h1>About Us</h1>
    <div className="nav-abt">

      <div className="Ric-abt">
        <img src="unnamed.png" alt="Ricky" />
        <p>
          My name is Ricardo Watson I am Based in Frankfurt am main, Germany I
          am a Fullstack developer and this is one of the web pages I have
          created along with my businesses partner Vinotha
        </p>

        <button type="button">
          <a href="https://github.com/Rickangelodan31"></a>
        </button>
      </div>
      
      <div className="vin-abt">
        <img src="" alt="" />
        <p>
          My name is Vinotha I am Based in Frankfurt am main, Netherland I am a
          Fullstack developer and this is one of the web pages I have created
          along with my businesses partner Ricardo
        </p>
        <button type="button">
          <a href="https://github.com/Rickangelodan31"></a>
        </button>
      </div>
    </div></>
  );
};

export default AboutPage;
