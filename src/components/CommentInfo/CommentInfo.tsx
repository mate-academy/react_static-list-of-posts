import React from 'react';

export const CommentInfo: React.FC = () => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">pariatur omnis in</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href="mailto:Telly_Lynch@karl.co.uk"
      >
        Telly_Lynch@karl.co.uk
      </a>
    </div>

    <div className="CommentInfo__body">
      dolorum voluptas laboriosam quisquam ab totam beatae et aut
      aliquid optio assumenda voluptas velit itaque quidem voluptatem
      tempore cupiditate in itaque sit molestiae minus dolores magni
    </div>
  </div>
);
