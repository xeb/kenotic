import React from 'react';
import { Link } from 'react-router-dom';
import SermonList from './SermonList';

function Landing() {
  return (
    <div className="landing-container">
      {/* Slide 1: The Cross */}
      <section className="landing-slide slide-1">
        <div className="slide-content">
          <blockquote className="landing-quote">
            <p className="quote-text">
              "I asked the Lord to reveal Himself. I asked to see Him more clearly. I asked to behold His divine nature.
              <br /><br />
              Why is it that I am surprised to then stare at a cross?"
            </p>
          </blockquote>
          <div className="scroll-indicator">↓</div>
        </div>
      </section>

      {/* Slide 2: Kingdom */}
      <section className="landing-slide slide-2">
        <div className="slide-content">
          <blockquote className="landing-quote">
            <p className="quote-text">
              "The Kingdom is already around us—like the Matrix, once you see it, you cannot unsee it.
              Build no empire, feed the Kingdom."
            </p>
            <footer className="quote-source">
              <Link to="/sermon/end-of-empire-dawn-of-kingdom">The End of Empire, The Dawn of the Kingdom</Link>
            </footer>
          </blockquote>
          <div className="scroll-indicator">↓</div>
        </div>
      </section>

      {/* Slide 3: Grace */}
      <section className="landing-slide slide-3">
        <div className="slide-content">
          <blockquote className="landing-quote">
            <p className="quote-text">
              "God is reality itself, not a system to exploit.
              When Jesus says 'your sins are forgiven,' He observes reality—grace already overflowing."
            </p>
            <footer className="quote-source">
              <Link to="/sermon/reality-not-rules">Reality, Not Rules</Link>
            </footer>
          </blockquote>
          <div className="scroll-indicator-final">↓ Continue to sermons</div>
        </div>
      </section>

      {/* Sermon List - appears after scrolling through slides */}
      <section className="sermons-section">
        <SermonList />
      </section>
    </div>
  );
}

export default Landing;
