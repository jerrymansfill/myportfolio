import React, { useState } from 'react';
import Header from './header';
// import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
        try {
          // Send the form data to your backend API for processing
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.status === 200) {
            // Form submission successful
            alert('Message sent successfully!');
          } else {
            // Form submission failed
            alert('Message sending failed. Please try again.');
          }
        } catch (error) {
          console.error('Error sending form data:', error);
        }
      };

      
    

  return (

    <><Header />
    <section className="contact">
          <h1 className="heading">
              contact <span>me</span>
          </h1>

          <div className="row">
              <div className="info-container">
                  <h1>get in touch</h1>
                  <p>
                  "Getting in touch is the bridge to effective communication, fostering connections and collaboration in both personal and professional relationships."

"Whether it's through a simple message or a face-to-face meeting, 'Get in touch' signifies the importance of reaching out and staying connected."
                  </p>
                  <div className="box-container">
                      <div className="box">
                          <i className="fa fa-location-arrow"></i>
                          <div className="info">
                              <h3>address :</h3>
                              <p>Nigeria, Akwaibom state, Uyo</p>
                          </div>
                      </div>
                      <div className="box">
                          <i className="fa fa-envelope"></i>
                          <div className="info">
                              <h3>Gmail :</h3>
                              <a href="mailto:Jeremiahnyong07@gmail.com" id="mail">
                                  <p>Jeremiahnyong07@gmail.com</p>
                              </a>
                          </div>
                      </div>
                      <div className="box">
                          <i className="fa fa-phone"></i>
                          <div className="info">
                              <h3>number :</h3>
                              <p>+234 9064580277</p>
                          </div>
                      </div>
                  </div>
                  <div className="middle">
            <a className="btn1" href="#">
                <i className="fa fa-facebook"></i>
            </a>
            <a className="btn1" href="#">
                <i className="fa fa-twitter"></i>
            </a>
            <a className="btn1" href="#">
                <i className="fa fa-whatsapp"></i>
            </a>
            <a className="btn1" href="#">
                <i className="fa fa-instagram"></i>
            </a>
            <a className="btn1" href="#">
                <i className="fa fa-linkedin"></i>
            </a> 
           
        </div>
              </div>
              {/* <form action="/contact">
                  <div className="inputBox">
                      <input type="text" placeholder="your name" />
                      <input type="number" placeholder="your number" />
                  </div>
                  <div className="inputBox">
                      <input type="email" placeholder="your email" />
                      <input type="text" placeholder="your subject" />
                  </div>
                  <textarea name="" placeholder="your message" id="" cols={30} rows={10} />
                  <input type="submit" value="send message" className="btn" />
              </form> */}
              <form onSubmit={handleSubmit}>
      <div className="inputBox">
        <input
          type="text"
          placeholder="your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="your number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </div>
      <div className="inputBox">
        <input
          type="email"
          placeholder="your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="your subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="message"
        placeholder="your message"
        id=""
        cols={30}
        rows={10}
        value={formData.message}
        onChange={handleChange}
      />
      <input type="submit" value="send message" className="btn" />
    </form>
          </div>
      </section></>
  );
};

export default Contact;
