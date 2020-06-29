import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList/CommentList';
import './PostList/PostList.css';

function PostItem({ postItem }) {
  return (
    <div className="post">
      <div className="post__user"><User user={postItem.user} /></div>
      <div className="post__text">
        <h2 className="post__title">{postItem.title}</h2>
        <p className="post__body">{postItem.body}</p>
      </div>
      <div>
        <CommentList comments={postItem.comments} />
      </div>
    </div>
  );
}

PostItem.propTypes = {
  postItem: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.bool,
    user: PropTypes.object,
    comments: PropTypes.array,
  }).isRequired,
};

export default PostItem;
