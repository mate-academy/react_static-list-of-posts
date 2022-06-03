import React from 'react';
import { PreparedPost } from '../../appTypeDefs';
import './PostInfo.scss';

interface PostInfoProps {
  post: PreparedPost;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    title, body, user, comments,
  } = post;

  return (
    <React.Fragment data-cy="post-info">
      <section className="Post">
        <h2 data-cy="post-title">{title}</h2>
        <h4>{`Author: ${user}`}</h4>
        <p data-cy="post-body">{body}</p>
      </section>
      <section className="Comment">
        <h4>{`Comment By: ${comments}`}</h4>
        <p>{comments}</p>
      </section>
    </React.Fragment>
  );
};
