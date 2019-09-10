import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import './Post.css';

const Post = ({ post }) => (
  <div className="post">
    <h1 className="post__header">
      Post #&nbsp;
      {post.id}
    </h1>
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    <>
      {post.user.map(user => (
        <User user={user} key={user.id} />
      ))}
    </>
    <>
      <span className="post__footer">Coments:</span>
      <CommentList comments={post.comments} />
    </>
  </div>
);

const shape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});

Post.propTypes = {
  post: shape.isRequired,
};

export default Post;
