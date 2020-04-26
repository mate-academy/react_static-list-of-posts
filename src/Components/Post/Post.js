import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentsList from '../CommentsList/CommentsList';
import './Post.scss';

function Post({ title, body, user, comments }) {
  return (
    <article className="post">
      <h2 className="post__title">{title}</h2>
      <p className="post__text">{body}</p>
      <User {...user} />
      <CommentsList comments={comments} />
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
};

export default Post;
