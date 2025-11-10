import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadAllSermons } from '../utils/sermonLoader';

function SermonList() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSermons() {
      setLoading(true);
      const loadedSermons = await loadAllSermons();
      setSermons(loadedSermons);
      setLoading(false);
    }
    fetchSermons();
  }, []);

  if (loading) {
    return <div className="loading">Loading sermons...</div>;
  }

  return (
    <div className="sermon-list">
      {sermons.map(sermon => (
        <Link
          key={sermon.id}
          to={`/sermon/${sermon.id}`}
          className="sermon-card"
        >
          <h2>{sermon.title}</h2>
          <div className="sermon-meta">
            <span className="sermon-date">{sermon.date}</span>
            <div className="sermon-tags">
              {sermon.tags.map(tag => (
                <span
                  key={tag}
                  className={`tag ${tag === 'sample' ? 'tag-sample' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="sermon-excerpt">{sermon.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}

export default SermonList;
