import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import { commentListShape } from '../Shapes/CommentListShape';
import { userShape } from '../Shapes/UserShape';

const Post = props => (
  <div className="post">
    <h1 className="post__headline">{props.title}</h1>
    <div className="post__article">
      <p className="post__content">{props.body}</p>
    </div>
    <User {...props.user} />
    <CommentList comments={props.comment} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userShape.isRequired,
  comment: PropTypes.arrayOf(commentListShape).isRequired,
};

export default Post;
