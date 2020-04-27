import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <article className="jumbotron">
      <h2 className="title">{title}</h2>
      <User user={user} />
      <p>{body}</p>
      <h5><u>Comments:</u></h5>
      <CommentList comments={comments} />
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        city: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Post;
