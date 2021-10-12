import React from 'react';
import CommentInterface from '../types/CommentInterface';

export const CommentInfo: React.FC<CommentInterface> = ({
  name, body, email,
}) => (
  <li className="CommentList__item">
    <p>
      {body}
    </p>
    <div className="CommentList__author-info">
      <div>
        {name}
      </div>
      <div>
        {email}
      </div>
    </div>
  </li>
);
