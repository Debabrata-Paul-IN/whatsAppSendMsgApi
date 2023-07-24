import React, { useState } from "react";
import axios from "axios";
import logo from "../../asset/Sampurna logo skills.png";
import whatsAppLogo from "../../asset/whatsapp.png";
import "./home.css";

export const Home = () => {
  const [phNo, setPhNo] = useState("");

  const url = "https://graph.facebook.com/v17.0/108079229014479/messages";
  const urlheader = {
    headers: {
      Authorization:
        "Bearer EAANqZA8qBU20BADJT2Y5ZAeI8T5oBbH2bjWPWxFgSJ94htDoMZAocU8eqDr3XgxZAJSEZBhZAfE5uSnm3WrY0L8NUGU2OOPYZBB72aNKIZCWgj8bZAZALOUa1EeZBi1y9RfQEOee2t2ZAGs4y6RNK7TKUGrYr8u2vmKw5zcHeApdvHQf5QKXMUHV6mT5bBZCkHxhopowm1Oai9zIVBZBbBWOiD8g4WwZBCw93bx5UwZD",
      "Content-Type": "application/json",
    },
  };
  const handlePhNoChange = (e) => {
    setPhNo(e.target.value);
  };

  const sendMessage = () => {
    const msgBody = {
      messaging_product: "whatsapp",
      to: "91" + phNo,
      type: "template",
      template: {
        name: "hello_world",
        language: {
          code: "en_US",
        },
      },
    };
    axios
      .post(url, msgBody, urlheader)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <div className="logo-Wrapper">
        <img src={logo} alt="Sampurna-Logo" className="sampurna-logo" />
      </div>
      <div className="Page-Heading">
        <img src={whatsAppLogo} alt="WhatsAppLogo" className="WhatsAppLogo" />
        <p>Whatsapp Business Portal </p>
      </div>
      <section className="feature">
        <p>Send Message</p>
        <form>
          <input type="text"  value={phNo} onChange={handlePhNoChange} placeholder="Enter mobile No" required />
          <br/>
          <button className="btn"  onClick={sendMessage}>Send</button>
        </form>
      </section>
    </section>
  );
};
