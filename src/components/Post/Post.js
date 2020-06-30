import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import './Post.css';

const Post = ({ post }) => (
  <li className="App__Post-Item Post">
    {`Title: ${post.title} Post: ${post.body}`}
    <User user={post.user} />
    <CommentList postComments={post.postComments} />
  </li>
);

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    postComments: PropTypes.array.isRequired,
  }).isRequired,
};
