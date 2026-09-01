import React, { useState } from 'react';
import { 
  JavaGraphic, DSAGraphic, SpringGraphic, 
  ReactGraphic, SystemDesignGraphic, DevOpsGraphic 
} from './TopicGraphics.jsx';

export function TopicCard({ topic }) {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!topic) return null;

  const renderGraphic = (type) => {
    switch (type) {
      case 'java': return <JavaGraphic color={topic.color} />;
      case 'dsa': return <DSAGraphic color={topic.color} />;
      case 'spring': return <SpringGraphic color={topic.color} />;
      case 'react': return <ReactGraphic color={topic.color} />;
      case 'system-design': return <SystemDesignGraphic color={topic.color} />;
      case 'devops': return <DevOpsGraphic color={topic.color} />;
      default: return <JavaGraphic color={topic.color} />;
    }
  };

  const chapters = topic.chapters || [];
  const hasChapters = chapters.length > 0;

  return (
    <div 
      className={`flip-card-container ${isFlipped ? 'flipped' : ''}`}
      style={{ '--card-accent': topic.color || '#38bdf8' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        {/* FRONT OF THE CARD */}
        <div className="flip-card-front">
          <div className="card-banner-graphic" style={{ backgroundColor: `${topic.color || '#38bdf8'}10` }}>
            {renderGraphic(topic.graphic)}
          </div>

          <div className="card-front-body">
            <h3 className="topic-card-title">{topic.title}</h3>
            <p className="topic-card-description">{topic.description}</p>
            
            <div className="flip-indicator">
              <span>{hasChapters ? 'Hover to view chapters' : 'Coming soon'}</span>
              {hasChapters && <span className="flip-symbol">↻</span>}
            </div>
          </div>
        </div>

        {/* BACK OF THE CARD (REVEALED ON 3D FLIP) */}
        <div className="flip-card-back">
          <div className="card-back-header">
            <h4 className="back-title">{topic.title}</h4>
            <a 
              href={topic.docCategory || '/docs'}
              className="back-badge"
              style={{ color: topic.color || '#38bdf8', borderColor: `${topic.color || '#38bdf8'}50` }}
              onClick={(e) => e.stopPropagation()}
            >
              {hasChapters ? `${chapters.length} ${chapters.length === 1 ? 'Chapter' : 'Chapters'} →` : 'Docs →'}
            </a>
          </div>

          {hasChapters ? (
            <ul className="back-chapters-list">
              {chapters.map((ch, index) => (
                <li key={ch.id || index}>
                  <a 
                    href={ch.docPath || topic.docCategory || '/docs'}
                    className="back-chapter-item"
                    onClick={(e) => e.stopPropagation()}
                    title={`Open ${ch.title} in Docs`}
                  >
                    <span className="back-chapter-idx">{String(index + 1).padStart(2, '0')}</span>
                    <span className="back-chapter-title">{ch.title}</span>
                    <span className="back-md-tag">.md</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="back-empty-state">
              <span className="back-empty-text">No chapters available yet.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
