import React from 'react';
import './PostList.scss';

import PropTypes from 'prop-types';

import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <section className="postlist">
    {posts.map(post => (
      <article className="postlist__post" key={post.id}>
        <Post {...post} />
      </article>
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
};
