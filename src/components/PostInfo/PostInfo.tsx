import React from 'react';
import './PostInfo.scss';

type Props = {
  title: string;
  body: string;
};

export const PostInfo: React.FC<Props> = ({ title, body }) => (
  <div data-cy="post-info" className="info">
    <h1 data-cy="post-title">
      {title}
    </h1>

    <div data-cy="post-body" className="post-body">
      {body}
    </div>
  </div>
);
