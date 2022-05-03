import React from 'react';

export const CommentInfo: React.FC<PostComment> = ({
  name,
  email,
  body,
}) => (
  <div className="item">
    <div className="card">
      <div className="content">
        <div className="header">{name}</div>
        <div className="meta">{email}</div>
        <div className="description">
          {body}
        </div>
      </div>
    </div>
  </div>
);
