import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

function Post({ comments, post, users }) {
  const FilteredComments = comments.filter(comment => (
    comment.postId === post.id
  ));

  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <span>{post.body}</span>
      <User user={users.find(
        user => post.userId === user.id,
      )}
      />
      <CommentList comments={FilteredComments} />
    </div>
  );
}

Post.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number,
  }).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
