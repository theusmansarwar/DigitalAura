import React from "react";
import "./Featured.css";
import Button from "../Buttons/Button";

const Featured = () => {
  return (
    <>
      <section className="featured">
        {/* Left Content */}
        <div className="vertical-box">
          <ul className="section-one-vert">
            <li>fb</li>
            <li>insta</li>
            <li>in</li>
          </ul>
          <ul className="section-two-vert">
            <li>Marketing</li>
            <li>Designing</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="featured-left">
          <p className="small-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          <h1 className="title">
            DIGITAL <br /> <span>MARKETING</span>
          </h1>

          <p className="desc">
            non elementum gravida Lorem viverra Quisque sit amet, enim. nisl.
            non. vitae cursus volutpat ex. ex faucibus est. nibh Ut
          </p>

          <p className="desc">
            tincidunt luctus tincidunt quis nisi faucibus Lorem lobortis,
            sodales. sapien tincidunt nisi adipiscing commodo elit. eu id
          </p>

          {/* Buttons */}
          <div className="buttons-container">
            <Button variant="filled">Start Ranking Now</Button>
            <Button variant="outline">Contact Now</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="featured-right">
          <div className="eclips1">
            <div className="eclips2">
              <div className="eclips3"></div>
            </div>
          </div>
          <img src="/featured-person.png" alt="Person" className="hero-img" />
          <img src="featured0.png" alt="icon0" className="featured0"/>
          <img src="featured1.png" alt="icon1" className="featured1"/>
          <img src="featured2.png" alt="icon2" className="featured2"/>
          <img src="featured3.png" alt="icon3" className="featured3"/>
           
        </div>
      </section>
      <div className="featured-bottom">
        <div className="featured-heading-section">
          <p>Our Esteemed </p>
          <p>Clients</p>
        </div>
        <div className="featured-logos-section">
          <img src="item1.png" alt="company1" />
          <img src="item2.png" alt="company2" />
          <img src="item3.png" alt="company3" />
          <img src="item4.png" alt="company4" />
          <img src="item5.png" alt="company5" />
        </div>
      </div>
    </>
  );
};

export default Featured;
