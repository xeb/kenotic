import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SermonList() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/sermons')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch sermons');
        }
        return response.json();
      })
      .then(data => {
        setSermons(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading sermons...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
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
