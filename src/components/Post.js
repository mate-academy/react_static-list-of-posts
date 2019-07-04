import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

import CommentList from './CommentList';
import User from './User';

const Post = ({ post }) => (
  <section>
    <div className="user__info">
      <User user={post.user} />
    </div>
    <section className="post__container">
      <div>{post.title}</div>
      <div className="comments__body">{post.body}</div>
    </section>
    <div className="comments__list">
      <div>Comments:</div>
      <CommentList comments={post.comments} />
    </div>
  </section>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Post;
