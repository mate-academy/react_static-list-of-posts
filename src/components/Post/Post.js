import React from 'react';
import propTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = props => (
  <li>
    <h3>{props.post.title}</h3>
    <p>{props.post.body}</p>
    <User user={props.post.user} />
    <CommentList comment={props.post.commentsList} />
  </li>
);
Post.propTypes = {
  post: propTypes.shape({
    title: propTypes.string,
    body: propTypes.string,
    user: propTypes.shape({}),
    commentsList: propTypes.array,
  }).isRequired,
};

export default Post;
