import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ posts, users, comments }) => (
  <>
    <h1>Post Feed</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Post
            {...post}
            {...users.find(user => user.id === post.userId)}
            comments={comments.filter(comment => comment.postId === post.id)}
          />
        </li>
      ))}
    </ul>
  </>
);

PostList.defaultProps = {
  users: [],
  comments: [],
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
    }),
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
  comments: PropTypes.arrayOf(
    PropTypes.shape({ postId: PropTypes.number.isRequired }),
  ),
};
