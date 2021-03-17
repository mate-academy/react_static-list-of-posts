import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './Post';

export function PostList({ posts }) {
  return (
    <ul>
      {posts.map(item => (
        <li key={item.id}>
          <Post
            title={item.title}
            body={item.body}
            user={item.user}
            comments={item.comments}
          />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
          city: PropTypes.string.isRequired,
          street: PropTypes.string.isRequired,
          suite: PropTypes.string.isRequired,
          zipcode: PropTypes.string.isRequired,
        }),
      }).isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  ).isRequired,
};
