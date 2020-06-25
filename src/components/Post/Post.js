import React from 'react';

import './Post.css';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { PostTypes } from '../Shape/PostTypes';

export const Post = (props) => {
  const {
    title,
    body,
    user,
    comments,
  } = props;

  return (
    <>
      <h1 className="post__title">
        {title}
      </h1>
      <p className="post__body">
        {body}
      </p>
      <ul className="post__user user">
        <User {...user} />
      </ul>
      <CommentList commentList={comments} />
    </>
  );
};

Post.propTypes = PostTypes;
