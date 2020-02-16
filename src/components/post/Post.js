import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';
import CommentList from '../commentList/CommentList';
import './post.css';

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
    user: PropTypes.shape({
      address: PropTypes.shape({
        city: PropTypes.string,
      }).isRequired,
    }),
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Post;
