import React from 'react';
import './Post.scss';

import { postPropTypes } from '../TypesOfProp';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User';

export const Post = ({ post }) => {
  const { title, body } = post;

  return (
    <>
      <h2 className="post__title">{title}</h2>
      <p className="post__body"><em>{body}</em></p>

      <User user={post.user} />
      <CommentList comments={post.comments} />
    </>
  );
};

Post.propTypes = postPropTypes;
