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
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user: PropTypes.object.isRequired,
      comments: PropTypes.array.isRequired,
    }),
  ).isRequired,
};
