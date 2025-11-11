import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import sermons from '../data/sermons';

function SermonDetail() {
  const { id } = useParams();
  const sermon = sermons.find(s => s.id === id);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sermon && sermon.file) {
      setLoading(true);
      fetch(`/sermons/${sermon.file}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load sermon content');
          }
          return response.text();
        })
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [sermon]);

  if (!sermon) {
    return (
      <div className="sermon-detail">
        <Link to="/" className="back-link">← Back to Sermons</Link>
        <div className="error">Sermon not found</div>
      </div>
    );
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
      {loading && <div className="loading">Loading sermon...</div>}
      {error && <div className="error">Error: {error}</div>}
      {!loading && !error && (
        <div className="sermon-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default SermonDetail;
