import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="contant-short text-center">
        <div className="row">
          <div className="col">
            <p className="fs-6">Ready to get started?</p>
            <p className="fs-6">Talk to us today</p>
          </div>
          <div className="col">
            <button className="btn-sub">
              <NavLink to="/contact">Get Started</NavLink>
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container contant-short-1">
          <div className="row">
            <div className="col">
              <h6 className="fs-5">Ecom Thechnical</h6>
              <p className="fs-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col">
              <p className="fs-5">Subscribe to get important updates</p>
              <input
                type="text"
                placeholder="here"
                autoComplete="off"
                required
              />
              <button className="btn-sub">Subscribe</button>
            </div>
            <div className="col">
              <h1 className="fs-5">Follow Us</h1>
              <div className="social-icon">
                <div>
                  <FaDiscord className="icon" />
                </div>
                <div>
                  <FaInstagram className="icon" />
                </div>
                <div>
                  <FaYoutube className="icon" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-contact">
                <p className="fs-6">Call US</p>
                <a href="tel:1238456987">+91 1238456987</a>
              </div>
            </div>
          </div>
        </div>

         <hr />
         <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>
                  @{new Date().getFullYear()} TechStore All Rights Reserved
                </p>
              </div>
              <div className="col">
                <p>Privacy Policy</p>
                <p>Term & Condition</p>
              </div>
            </div>
          </div>
         </div>
      </footer>
    </>
  );
};

export default Footer;
