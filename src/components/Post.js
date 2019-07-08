import React from 'react';
import PropTypes from 'prop-types';
import UserData from './UserData';
import CommentList from './CommentsList';

const Post = ({ post }) => (
  <div className="post-list">
    <h2>{post.post.title}</h2>
    <p>{post.post.body}</p>
    <UserData user={post.user} />
    <div>
      <h3>Comments:</h3>
      <CommentList comments={post.comments} />
    </div>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    post: PropTypes.object,
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.object,
    comments: PropTypes.array,
  }).isRequired,
};

export default Post;
