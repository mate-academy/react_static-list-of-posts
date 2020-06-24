import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

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
  user: PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.object,
    company: PropTypes.object,
    email: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  comment: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    posId: PropTypes.number,
  })).isRequired,
};

export default Post;
