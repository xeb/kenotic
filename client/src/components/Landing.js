import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { loadAllSermons } from '../utils/sermonLoader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Landing() {
  const { chapterNum } = useParams();
  const navigate = useNavigate();
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChapters() {
      setLoading(true);
      const loadedSermons = await loadAllSermons();
      // Number them as chapters 1-7
      const numberedChapters = loadedSermons.map((sermon, index) => ({
        ...sermon,
        chapterNumber: index + 1
      }));
      setChapters(numberedChapters);

      // Select chapter based on URL parameter or default to first
      if (chapterNum) {
        const chapterIndex = parseInt(chapterNum) - 1;
        if (chapterIndex >= 0 && chapterIndex < numberedChapters.length) {
          setSelectedChapter(numberedChapters[chapterIndex]);
        } else {
          // Invalid chapter number, redirect to first chapter
          navigate('/chapter/1', { replace: true });
          setSelectedChapter(numberedChapters[0]);
        }
      } else {
        // No chapter specified, redirect to chapter 1
        navigate('/chapter/1', { replace: true });
        setSelectedChapter(numberedChapters[0]);
      }

      setLoading(false);
    }
    fetchChapters();
  }, [chapterNum, navigate]);

  if (loading) {
    return <div className="loading">Loading chapters...</div>;
  }

  return (
    <div className="book-container">
      {/* Chapter Navigation Scroll */}
      <aside className="chapter-scroll">
        <div className="scroll-top"></div>
        <div className="scroll-body">
          <div className="scroll-title">Contents</div>
          <nav className="chapter-nav">
            {chapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/chapter/${chapter.chapterNumber}`}
                className={`chapter-item ${selectedChapter?.id === chapter.id ? 'active' : ''}`}
              >
                <span className="chapter-number">Chapter {chapter.chapterNumber}</span>
                <span className="chapter-title">{chapter.title}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="scroll-bottom"></div>
      </aside>

      {/* Chapter Content */}
      <main className="chapter-content">
        {selectedChapter && (
          <article className="chapter-article">
            <header className="chapter-header">
              <div className="chapter-label">Chapter {selectedChapter.chapterNumber}</div>
              <h1>{selectedChapter.title}</h1>
              {selectedChapter.excerpt && (
                <p className="chapter-excerpt">{selectedChapter.excerpt}</p>
              )}
            </header>
            {selectedChapter.scriptures && selectedChapter.scriptures.length > 0 && (
              <div className="chapter-scriptures">
                <h2>Scripture References</h2>
                <table>
                  <tbody>
                    {selectedChapter.scriptures.map((scripture, index) => (
                      <tr key={index}>
                        <td>
                          <div className="scripture-text">{scripture.text}</div>
                          <div className="scripture-reference">— {scripture.reference}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="chapter-text">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {selectedChapter.content}
              </ReactMarkdown>
            </div>
          </article>
        )}
      </main>
    </div>
  );
}

export default Landing;
