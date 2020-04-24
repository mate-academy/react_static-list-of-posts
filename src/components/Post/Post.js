import React from 'react';
import PropTypes from 'prop-types';
import { User, userTypes } from '../User/User';
import { commentTypes } from '../Comment/Comment';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <li className="post">
      <h2>
        {title}
      </h2>
      <p>{body}</p>
      <User user={user} />
      <CommentList comments={comments} />
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape(userTypes).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape(commentTypes)).isRequired,
  }).isRequired,
};
