import React from 'react';
import Header from './header';
import { Link } from 'react-router-dom';



const Portfolio: React.FC = () => {
  

  return (
    <><Header />
    <section className="portfolio">

          <h1 className="heading"> My Services </h1>

          <div className="box-container">

              <div className="box">
                  <img  alt="" />
                  <div className="content">
                      <h3>Small Buisness Site</h3>
                      <p>A small business website serves as a vital online presence, offering a platform for businesses to showcase their products or services, connect with customers, and establish credibility in the digital age. It often serves as the digital storefront, making it essential for attracting and engaging potential customers.</p>
                      <a href="">read more</a>
                  </div>
              </div>

              <div className="box">
                  <img  alt="" />
                  <div className="content">
                      <h3>Marketing Site</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                      <a href="">read more</a>
                  </div>
              </div>

              <div className="box">
                  <img  alt="" />
                  <div className="content">
                      <h3>Online Resturant</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                      <a href="">read more</a>
                  </div>
              </div>

              <div className="box">
                  <img  alt="" />
                  <div className="content">
                      <h3>Landing Page</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                      <a href="">read more</a>
                  </div>
              </div>

              <div className="box">
                  <img  alt="" />
                  <div className="content">
                      <h3>Portfolio</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                      <a href="">read more</a>
                  </div>
              </div>

              <div className="box">
                  <img  alt="" />
                  <div className="content">
                      <h3>Online courses</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                      <a href="">read more</a>
                  </div>
              </div>

          </div>

          <Link to="/portfolio" className="btn"> load more <i className="fa fa-arrow-circle-left"></i> </Link>

      </section></>

  )}; export default Portfolio