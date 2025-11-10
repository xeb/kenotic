import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SermonList from './SermonList';
import { loadQuotes } from '../utils/sermonLoader';

function Landing() {
  const [quotes, setQuotes] = useState({
    quote1: { text: '', source: null },
    quote2: { text: '', source: '/sermon/end-of-empire-dawn-of-kingdom' },
    quote3: { text: '', source: '/sermon/reality-not-rules' }
  });

  useEffect(() => {
    async function fetchQuotes() {
      const quotesMarkdown = await loadQuotes();

      // Simple parsing - extract quotes between ## markers
      const quote1Match = quotesMarkdown.match(/## Quote 1: The Cross\n\n"([^"]+)"\n\n/s);
      const quote2Match = quotesMarkdown.match(/## Quote 2: The Kingdom\n\n"([^"]+)"/s);
      const quote3Match = quotesMarkdown.match(/## Quote 3: Grace and Reality\n\n"([^"]+)"/s);

      setQuotes({
        quote1: {
          text: quote1Match ? quote1Match[1] : '"I asked the Lord to reveal Himself..."',
          source: null
        },
        quote2: {
          text: quote2Match ? quote2Match[1] : '"The Kingdom is already around us..."',
          source: '/sermon/end-of-empire-dawn-of-kingdom'
        },
        quote3: {
          text: quote3Match ? quote3Match[1] : '"God is reality itself..."',
          source: '/sermon/reality-not-rules'
        }
      });
    }
    fetchQuotes();
  }, []);

  return (
    <div className="landing-container">
      {/* Slide 1: The Cross */}
      <section className="landing-slide slide-1">
        <div className="slide-content">
          <blockquote className="landing-quote">
            <p className="quote-text">
              {quotes.quote1.text.split('\n\n').map((para, i) => (
                <React.Fragment key={i}>
                  {para}
                  {i < quotes.quote1.text.split('\n\n').length - 1 && <><br /><br /></>}
                </React.Fragment>
              ))}
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
              {quotes.quote2.text}
            </p>
            <footer className="quote-source">
              <Link to={quotes.quote2.source}>The End of Empire, The Dawn of the Kingdom</Link>
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
              {quotes.quote3.text}
            </p>
            <footer className="quote-source">
              <Link to={quotes.quote3.source}>Reality, Not Rules</Link>
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
