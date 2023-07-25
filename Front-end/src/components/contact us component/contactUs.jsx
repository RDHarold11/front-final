import React from "react";
import './contactUs.css'

const ContactUs =()=>{

    const handleSummit =(e)=>{
        e.preventDefault()
    }

    return(
        <>
        <div className="contactUscontainer">
            <div className="contactUs">
                <div className="titleContact">
                    <h1>Contactanos</h1>
                    <h3>Signup now. its free and takes less than 3 minutes</h3>
                </div>
                
                <form action="submit" className="inputContainer">
                    <input className="inputContactus" type="text" placeholder="Email address"/>
                    <input className="inputContactus" type="text" placeholder="Full name"/>
                    <input className="inputContactus" type="text" placeholder="message"/>
                    <button className="buttonmContactus" onClick={handleSummit}>ENVIAR</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default ContactUs;