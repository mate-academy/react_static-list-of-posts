import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <section className="post" key={post.id}>
        <Post {...post} />
      </section>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
