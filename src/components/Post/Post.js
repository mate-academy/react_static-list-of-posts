import React from 'react';
import propTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = ({ postData }) => (
  <li>
    <h3>{postData.title}</h3>
    <p>{postData.body}</p>
    <User user={postData.user} />
    <CommentList comment={postData.commentsList} />
  </li>
);
Post.propTypes = {
  postData: propTypes.shape({
    title: propTypes.string,
    body: propTypes.string,
    user: propTypes.shape({}),
    commentsList: propTypes.array,
  }).isRequired,
};

export default Post;
