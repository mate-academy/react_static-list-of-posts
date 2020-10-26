import React from 'react';
import User from './User';
import CommentList from './CommentList';
import PostShape from './PropTypes/PostShape';

const Post = ({ postItem: { title, body, user, comments } }) => (
  <li className="post-list__item">
    <h3 className="post-list__title">{title}</h3>
    <p className="post-list__text">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </li>
);

Post.propTypes = PostShape;

export default Post;
