import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

function Post({ currentPost }) {
  return (
    <div className="posts">
      <p>
        Title:::
        {currentPost.title}
      </p>
      <p>
        Body:::
        {currentPost.body}
      </p>
      <User user={currentPost.user} />
      <h3>Comments:</h3>
      <CommentList currentComments={currentPost.comments} />
    </div>
  );
}

Post.propTypes = {
  currentPost: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
  }).isRequired,
};
export default Post;
