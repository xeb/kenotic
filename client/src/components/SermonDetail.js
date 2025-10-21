import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function SermonDetail() {
  const { id } = useParams();
  const [sermon, setSermon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/sermons/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Sermon not found');
        }
        return response.json();
      })
      .then(data => {
        setSermon(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading sermon...</div>;
  }

  if (error) {
    return (
      <div className="sermon-detail">
        <Link to="/" className="back-link">← Back to Sermons</Link>
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!sermon) {
    return <div className="error">Sermon not found</div>;
  }

  return (
    <div className="sermon-detail">
      <Link to="/" className="back-link">← Back to Sermons</Link>
      <h1>{sermon.title}</h1>
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
      <div className="sermon-content">
        <ReactMarkdown>{sermon.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default SermonDetail;
