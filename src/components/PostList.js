import React from 'react';
import PropTypes from 'prop-types';

import { PostPropTypes } from './propTypes/PostPropTypes';
import { Post } from './Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <section className="PostList">
    {posts.map(post => (
      <article className="Post" key={post.id}>
        <Post {...post} />
      </article>
    ))}
  </section>
);

PostList.propTypes = PropTypes.arrayOf(
  PropTypes.shape(PostPropTypes).isRequired,
).isRequired;
