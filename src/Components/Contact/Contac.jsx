import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contac = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f1e981d7-4696-4e98-b46d-ae154bf6640c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
            We’d love to hear from you! Whether you have questions, feedback, or need assistance, 
            our team is here to help. Please use the contact form below, or reach out to us
             through one of the following methods and please send  you feedback
            </p>
            <ul>
                <li><img src={mail_icon} alt="" /> Contact@ankii.in</li>
                <li><img src={phone_icon} alt="" /> +91 8282828222</li>
                <li><img src={location_icon} alt="" />101 sector 14 Thane Wagle industrial Estatae 400604,Maharastra.India </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text'name='name' placeholder='enter your name'
                required/>
                  <label>Phone Number</label>
                <input type='tel'name='phone' placeholder='enter your phone number'
                required/>
                  <label>Write Your Message here</label>
                <textarea name="message" rows="6" placeholder='enter you message required' required></textarea >
                <button type='submit' className='btn dark-btn'>Submit Now  <img src={white_arrow} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>

        </div>
  )
}

export default Contac