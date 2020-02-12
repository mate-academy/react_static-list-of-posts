import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import User from './User';

const Post = ({ post }) => (
  <div className="post">
    <div className="user">
      Post
      {' '}
      {post.id}
      <div>
        <User user={post.user} />
      </div>
    </div>
    <article className="article">
      <h2 className="post-title">
        {post.title}
      </h2>
      <p>{post.body}</p>
    </article>
    <CommentList comments={post.comments} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
