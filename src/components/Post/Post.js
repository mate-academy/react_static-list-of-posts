import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = (props) => {
  const { post } = props;

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <User userData={post} />

      <ul className="post__comments">
        <CommentList comments={post.comments} />
      </ul>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.oneOfType(
    [PropTypes.string,
      PropTypes.number,
    ],
  ).isRequired,
};
