import PropTypes from 'prop-types';
import React from 'react';
import Post from '../Post';

export default function PostList({ preparedTodos, comments }) {
  const addUserComments = preparedTodos.map(todo => ({
    ...todo,
    comments: comments.filter(comment => comment.postId === todo.id),
  }));

  const userWithComents = addUserComments.map(post => (
    <Post key={post.id} {...post} />
  ));

  return (
    <ul>
      {userWithComents}
    </ul>
  );
}

PostList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),

  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
    }),
  ),
};

PostList.defaultProps = {
  preparedTodos: [],
  comments: [],
};
