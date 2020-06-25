import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

function PostItem({ postItem }) {
  return (
    <div>
      <div><User user={postItem.user} /></div>
      <h2>{postItem.title}</h2>
      <p>{postItem.body}</p>
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
