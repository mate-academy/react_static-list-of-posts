import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

function Post({ postsUser }) {
  return (
    <div>
      <p>{postsUser.title}</p>
      <p>{postsUser.body}</p>
      <User user={postsUser.user} />
      <CommentList comment={postsUser.comments} />
    </div>
  );
}

Post.propTypes = {
  postsUser: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.string,
    comments: PropTypes.string,
  }).isRequired,
};

export default Post;
