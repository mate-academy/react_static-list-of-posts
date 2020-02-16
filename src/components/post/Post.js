import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../commentList/CommentList';
import './post.css';
import { User, userPropTypes } from '../user/User';
import { commentPropTypes } from '../comment/Comment';

function Post({ post }) {
  const { title, body, user, comments } = post;

  return (
    <>
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      <User {...user} />
      <CommentList comments={comments} />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape(userPropTypes),
    comments: PropTypes.arrayOf(
      PropTypes.shape(commentPropTypes),
    ).isRequired,
  }).isRequired,
};

export default Post;
