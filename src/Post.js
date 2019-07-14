import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ postData }) => (
  <li className="post_list">
    <User user={postData.user} />
    <p className="post_title">
      <b>Title</b>
      {' '}
      {postData.title}
    </p>
    <p className="post_body">{postData.body}</p>
    <CommentList comments={postData.comments} />
  </li>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.object,
    comments: PropTypes.object,
  }).isRequired,
};

export default Post;
