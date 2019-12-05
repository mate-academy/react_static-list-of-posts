import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post }) => (
  <div className="onePost">
    <h2 className="title">{post.title}</h2>
    <p className="body_title">{post.body}</p>
    <p className="user_inform">
      <User user={post.user} />
    </p>
    <p className="commentList">
      <CommentList comments={post.comment} />
    </p>
  </div>
);

Post.propTypes
  = { post: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Post;
