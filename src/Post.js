import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

function Post({ postsUser }) {
  return (
    <div>
      <User userData={postsUser.userPost} />
      <p>{postsUser.title}</p>
      <p>{postsUser.body}</p>
      <CommentList commentsData={postsUser.userComments} />
    </div>
  );
}

Post.propTypes = {
  postsUser: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    userPost: PropTypes.object,
    userComments: PropTypes.object,
  }).isRequired,
};

export default Post;
