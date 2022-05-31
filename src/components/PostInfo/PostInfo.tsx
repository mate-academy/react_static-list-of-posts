import React from 'react';
import './PostInfo.scss';
import { Post } from '../../type';

export const PostInfo: React.FC <Post> = ({
  title,
  body,
}) => (
  <>
    <div data-cy="post-info">
      <h3 data-cy="post-title">
        {`Post title: ${title}`}
      </h3>
      <p data-cy="post-body">{`Post body: ${body}`}</p>
    </div>
  </>
);
