import React from 'react';
import { Link } from 'react-router-dom';
import sermons from '../data/sermons';

function SermonList() {
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
