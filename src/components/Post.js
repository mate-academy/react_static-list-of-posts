import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';
import './Post.scss';

const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <h2 className="post__title">
      {title}
    </h2>
    <User {...user} />
    <p className="post__body">
      {body}
    </p>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf({}).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
