import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { loadSermon } from '../utils/sermonLoader';

function SermonDetail() {
  const { id } = useParams();
  const [sermon, setSermon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSermon() {
      setLoading(true);
      setError(null);
      try {
        const loadedSermon = await loadSermon(id);
        setSermon(loadedSermon);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSermon();
  }, [id]);

  if (loading) {
    return (
      <div className="sermon-detail">
        <Link to="/" className="back-link">← Back to Sermons</Link>
        <div className="loading">Loading sermon...</div>
      </div>
    );
  }

  if (error || !sermon) {
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
      <div className="sermon-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{sermon.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default SermonDetail;
