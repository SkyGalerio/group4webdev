import React from 'react';
import '../assets/About.css'

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>The Developer's Guild is a community of tech enthusiasts at De Anza 
         College.</p>
      <p>We aim to foster a collaborative environment where students can learn, 
         grow, and work on exciting projects together.</p>
      {/* Contact us */}
      <div className="contact">
        <h1>Contact Us</h1>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default About;
