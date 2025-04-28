import React from 'react';
import Header from './header';
import image1 from '../img/icon1.jpg';
import image2 from '../img/icon2.png'
import image3 from '../img/icon3.png';
import image4 from '../img/icon4.png'
import image5 from '../img/icon5.png'
import image6 from '../img/icon6.png'
import image7 from '../img/icon7.png'
import image8 from '../img/icon8.png'
import image9 from '../img/icon9.png'
import image10 from '../img/pngwing.com (1).png'
import image15 from '../img/pngwing.com.png'
import image12 from '../img/pngwing.com (2).png'
import image13 from '../img/pngwing.com (3).png'
import image14 from '../img/pngwing.com (4).png'


const About: React.FC = () => {
  

  return (
 <><Header /><section className="about">

          <h1 className="heading"> About Me </h1>

          <div className="row">

              <div className="info-container">

                  <h1>personal info</h1>

                  <div className="box-container">

                      <div className="box">
                          <h3> <span>name : </span> Jeremiah George </h3>
                          <h3> <span>age : </span> 21 </h3>
                          <h3> <span>email : </span> jnyong67@gmail.com</h3>
                          <h3> <span>address : </span> Nigeria, Akwaibom sate, Uyo</h3>
                      </div>

                      <div className="box">
                          <h3> <span>skill : </span> Developer </h3>
                          <h3> <span>experience : </span>4 years +</h3>
                          <h3> <span>language : </span> english </h3>
                      </div>

                  </div>



              </div>

              <div className="count-container">

                  <div className="box">
                      <h3>3+</h3>
                      <p>years of experience</p>
                  </div>



                  <div className="box">
                      <h3>8+</h3>
                      <p>Programmers</p>
                  </div>

              </div>

          </div>

      </section><section className="skills">

              <h1 className="heading"> <span>my</span> skills </h1>

              <div className="box-container">
                  <div className="box">
                      <img src={image1} />
                          <h3>HTML 5</h3>
                      </div>
                  <div className="box">
                      <img src={image2} />
                          <h3>css 3</h3>
                      </div>
                  <div className="box">
                      <img src={image6}  />
                          <h3>Tailwind</h3>
                      </div>
                  <div className="box">
                      <img src={image7}  />
                          <h3>bootstrap 5</h3>
                      </div>
                  <div className="box">
                      <img src={image3}  />
                          <h3>javascript</h3>
                      </div>
                  <div className="box">
                      <img src={image4}  />
                          <h3>Node.js</h3>
                      </div>
                  <div className="box">
                      <img src={image5}  />
                          <h3>Python</h3>
                      </div>
                      <div className="box">
                      <img src={image15}  />
                          <h3>Django</h3>
                      </div>
                      <div className="box">
                      <img src={image10}  />
                          <h3>Mysql</h3>
                      </div>
                      <div className="box">
                      <img src={image14}  />
                          <h3>express.js</h3>
                      </div>
                      <div className="box">
                      <img src={image8}  />
                          <h3>React.js</h3>
                      </div>
                      <div className="box">
                      <img src={image12}  />
                          <h3>Typescript</h3>
                      </div>
                      <div className="box">
                      <img src={image13}  />
                          <h3>Gsap</h3>
                      </div>
                      <div className="box">
                      <img src={image9}  />
                          <h3>sass</h3>
                      </div>
              </div>

          </section><section className="education">
    <h1 className="heading"> <span>my</span> education </h1>

    <div className="box-container">
        <div className="box">
            <i className="fa fa-graduation-cap"></i>
            <span>2021 - 2022</span>
            <h3>Introduction to Programming</h3>
            <p>Gained foundational knowledge in programming concepts and languages, which sparked my interest in web development.</p>
        </div>

        <div className="box">
            <i className="fa fa-graduation-cap"></i>
            <span>2022 - 2023</span>
            <h3>Front-End Development</h3>
            <p>Studied HTML, CSS, and JavaScript, and developed proficiency in creating responsive and dynamic web pages.</p>
        </div>

        <div className="box">
            <i className="fa fa-graduation-cap"></i>
            <span>2023</span>
            <h3>Advanced JavaScript & Frameworks</h3>
            <p>Deepened my understanding of JavaScript and explored frameworks like React.jsx and React.tsx for building complex user interfaces.</p>
        </div>

        <div className="box">
            <i className="fa fa-graduation-cap"></i>
            <span>2023 - 2024</span>
            <h3>Back-End Development</h3>
            <p>Learned server-side development using Python and Django, and worked with Express.js to create robust back-end services.</p>
        </div>

        <div className="box">
            <i className="fa fa-graduation-cap"></i>
            <span>2023 - 2024</span>
            <h3>Database Management</h3>
            <p>Acquired skills in database design and management using PostgreSQL, enabling me to create efficient and scalable data storage solutions.</p>
        </div>

        <div className="box">
            <i className="fa fa-graduation-cap"></i>
            <span>2023 - 2024</span>
            <h3>Full-Stack Development</h3>
            <p>Integrated my front-end and back-end skills to become a proficient full-stack developer, capable of handling both client and server-side development.</p>
        </div>
    </div>
</section>
</>

)
}; 
export default About
