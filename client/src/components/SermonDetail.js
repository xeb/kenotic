import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import sermons from '../data/sermons';

function SermonDetail() {
  const { id } = useParams();
  const sermon = sermons.find(s => s.id === id);

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
      <div className="sermon-content">
        <ReactMarkdown>{sermon.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default SermonDetail;
