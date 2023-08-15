import "./contactUs.css";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

const ContactUs = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    message: ""
  })
  const handleChange = (e) => {
    setValues((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleSummit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Fade direction="left">
        <div className="contactUscontainer">
          <div className="contactUs">
            <div className="titleContact">
              <h1>Contáctanos</h1>
              <h3>Contacta con nosotros.</h3>
            </div>

            <form className="inputContainer"
                method="POST"
                action="https://getform.io/f/cc73dff0-782d-4bac-bf55-39c969402a77"
                className="flex flex-col max-w-[600px] w-full"
              >
              <input
                className="inputContactus"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
                placeholder="Email address"
              />
              <input
                className="inputContactus"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Full name"
              />
              <input
                className="inputContactus"
                name="message"
                value={values.message}
                onChange={handleChange}
                type="text"
                placeholder="message"
              />
              <button className="buttonmContactus" onClick={handleSummit}>
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ContactUs;
