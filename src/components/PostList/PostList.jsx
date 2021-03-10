import PropTypes from 'prop-types';
import React from 'react';
import './PostList.scss';

import { Post } from '../Post';
import { PostType } from '../../Types/types';

export function PostList({
  posts,
}) {
  const renderedPosts = posts.map(post => (
    <Post
      key={post.id}
      post={post}
    />
  ));

  return (
    <ul className="post__list">
      {renderedPosts}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PostType.isRequired,
  ).isRequired,
};
