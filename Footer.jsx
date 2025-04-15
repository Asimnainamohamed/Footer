import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email.trim()) {
      alert('Please enter a valid email.');
    } else {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.name}>
        <h2>
          Still Need Our <span className={styles.highlight}>Support</span>?
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className={styles.sub}>
          <input
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe Now</button>
        </div>
      </div>

      <hr />

      <div className={styles.bottom}>
        <div className={styles.about}>
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus. asimai
            asimuidjciuhcm jqicnqcqkjchcuiq ckqejfhqei asindddjjdjddjdjddssiixxnxx
          </p>
          <div className={styles.hours}>
            <strong>COACHING HOURS</strong>
            <p>Mon - Fri (7:00 - 8:00)</p>
            <p>Sat - Sun (7:00 - 10:00)</p>
          </div>
        </div>

        <div className={styles.use}>
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Get In Touch</a></li>
            <li><a href="#">Source Info</a></li>
          </ul>
        </div>

        <div className={styles.code}>
          <h3>Coding Course</h3>
          <ul>
            <li>Foundation</li>
            <li>Intermediate</li>
            <li>Advanced</li>
            <li>Custom Courses</li>
          </ul>
        </div>

        <div className={styles.life}>
          <h3>Life Skills Courses</h3>
          <ul>
            <li>Hand-Building Pottery</li>
            <li>Coco Crafts</li>
            <li>Time & Money Management</li>
            <li>Crochet Making</li>
            <li>More</li>
          </ul>
        </div>

        <div className={styles.foot}>
          <div className={styles.logo}>TECHTOTS</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
