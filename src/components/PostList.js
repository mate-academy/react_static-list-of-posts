import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './Post';
import { PostShape } from './shapes/PostShape';

export const PostList = ({ posts }) => (
  <section className="container">
    <ul
      className="row px-0"
      style={{
        listStyle: 'none',
      }}
    >
      {
        posts.map(post => (
          <li
            className="
              jumbotron
              px-3
              py-4
              col-sm
              bg
            "
            style={{
              marginRight: '5px',
              background: '#fcbf49',
            }}
            key={post.id}
          >
            <Post {...post} />
          </li>
        ))
      }
    </ul>
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(PostShape),
  ).isRequired,
};
