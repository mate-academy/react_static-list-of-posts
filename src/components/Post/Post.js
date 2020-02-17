import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import User from '../User/User';

const Post = ({ post }) => (
  <div className="post">
    <h3 className="post__header">{post.title}</h3>
    <User user={post.user} />
    <p className="post__body">{post.body}</p>
    <CommentList comments={post.commentsList} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.object,
    title: PropTypes.string,
    body: PropTypes.string,
    commentsList: PropTypes.array,
  }).isRequired,
};

export default Post;
