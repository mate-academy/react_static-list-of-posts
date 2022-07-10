import React from 'react';
import './PostInfo.scss';

type Props = {
  title: string;
  body: string;
};

export const PostInfo: React.FC<Props> = ({ title, body }) => (
  <>
    <h2 data-cy="post-title" className="post-info__title">
      {title}
    </h2>

    <p data-cy="post-body" className="post-info__body">
      {body}
    </p>
  </>
);
