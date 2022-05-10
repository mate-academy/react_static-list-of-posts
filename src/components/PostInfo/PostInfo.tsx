import React from 'react';
import './PostInfo.scss';

type Props = {
  title: string,
  body: string,
};

export const PostInfo: React.FC<Props> = ({ title, body }) => (
  <>
    <h2 className="title" data-cy="post-title">{title}</h2>
    <h3 data-cy="post-body">{body}</h3>
  </>
);
