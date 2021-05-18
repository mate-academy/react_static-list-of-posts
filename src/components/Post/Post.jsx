import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

function Post({ title, body, user, comments }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p className="post-text">{body}</p>
      <div className="post-user">
        <User {...user} />
      </div>
      <div className="post-comment">
        <CommentList comments={comments} />
      </div>
      <hr />
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Post;
