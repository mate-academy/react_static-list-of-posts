import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = props => (
  <div className="post-list__item">
    <div className="post-content">
      <h2 className="post-content__title">{props.post.title}</h2>
      <p className="post-content__body">{props.post.body}</p>
    </div>
    <User
      key={props.user.id}
      user={props.user}
    />
    <CommentList
      key={props.commentsList.id}
      commentsList={props.commentsList}
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
