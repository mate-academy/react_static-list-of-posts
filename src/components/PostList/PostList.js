import React from 'react';
import PropTypes from 'prop-types';
import { PostType } from '../../types';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <ol className="list-group list-group-numbered">
    {posts.map(post => (
      <li
        className="
        list-group-item
        list-group-item-action
        list-group-item-primary
        "
        key={post.id}
      >
        <Post post={post} />
      </li>
    ))}
  </ol>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
};
