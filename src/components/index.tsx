import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'
import { Link } from 'react-router-dom'; 
import Header from './header';
import desk from '../img/received.jpg'

const Index: React.FC = () => {
    const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const animation = gsap.timeline({ repeat: -1 });

    // Define the animation using yoyo effect
    animation
      .to(image, { y: -50, duration: 2, ease: 'power1.inOut' })
      .to(image, { y: 0, duration: 2, ease: 'power1.inOut' })
      .yoyo(true) // Add yoyo effect
      .repeat(-1); // Infinite loop

    return () => {
      animation.kill();
    };
  }, []);
  return (
    <>
      <Header />
      <section className="home">
        <div className="image">
        <img ref={imageRef} src={desk} alt="Bouncing Image" />
        </div>
        <div className="content">
          <h3>Introduction</h3>
          <span>My Name is Jeremiah George Nyong</span>
          <p>
          I am a dedicated web developer from Nigeria. Over the past year, I have immersed myself in the world of web development, continually honing my skills and overcoming numerous challenges along the way. Despite the obstacles, my passion for this field has driven me to persevere, transforming my hobby into a profession. Today, I proudly stand as a proficient full-stack web developer, committed to my craft and excited about the future.          </p>
          <Link to="/about" className="btn">
            about me <i className="fa fa-user"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
