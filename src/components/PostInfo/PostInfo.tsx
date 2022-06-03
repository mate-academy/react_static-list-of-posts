import React from 'react';
import './PostInfo.scss';
import { PropsPost } from '../../type';

export const PostInfo: React.FC <PropsPost> = ({
  post,
}) => (
  <>
    <div data-cy="post-info">
      <h3 data-cy="post-title">
        {`Post title: ${post.title}`}
      </h3>
      <p data-cy="post-body">{`Post body: ${post.body}`}</p>
    </div>
  </>
);
