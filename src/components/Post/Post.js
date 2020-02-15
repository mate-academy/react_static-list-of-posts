import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ postInfo }) => {
  const { user, title, body, comments } = postInfo;

  return (
    <li className="post-list__item post">
      <User userInfo={user} />
      <h3 className="post__title">{title}</h3>
      <p className="post__text">{body}</p>
      <p className="post__discusion">Comments ⬇⬇⬇</p>
      <CommentList comments={comments} />
    </li>
  );
};

Post.propTypes = {
  postInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
};
