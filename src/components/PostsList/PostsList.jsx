import React from 'react';
import PropTypes, { shape } from 'prop-types';

import { Post } from '../Post';

export const PostsList = ({ posts }) => (
  <article className="PostsList">
    <ul className="PostsList__list">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  </article>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(shape({
    id: PropTypes.number,
  })).isRequired,
};
