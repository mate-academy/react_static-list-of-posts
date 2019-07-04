import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post, user, commentsList }) => (
  <div className="post-list__item">
    <div className="post-content">
      <h2 className="post-content__title">{post.title}</h2>
      <p className="post-content__body">{post.body}</p>
    </div>
    <User
      key={user.id}
      user={user}
    />
    <CommentList
      key={commentsList.id}
      commentsList={commentsList}
    />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  commentsList: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default Post;
