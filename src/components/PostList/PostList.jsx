import PropTypes from 'prop-types';
import React from 'react';
import Post from '../Post';
import './PostList.scss';

export default function PostList({
  comments,
  addedUsersWithinPosts,
}) {
  const addedUsersAndComments = addedUsersWithinPosts.map(post => ({
    ...post,
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  const usersPosts = addedUsersAndComments.map(post => (
    <Post key={post.id} {...post} />
  ));

  return (
    <ul className="post__list">
      {usersPosts}
    </ul>
  );
}

PostList.propTypes = {
  addedUsersWithinPosts: PropTypes.arrayOf(
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
  addedUsersWithinPosts: [],
  comments: [],
};
