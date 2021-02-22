import React from 'react';
import { TypePreparedPosts } from '../types';
import { Post } from './Post';

export const PostList = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(post => (
      <div key={post.id}>
        <Post {...post} />
      </div>
    ))}
  </>
);

PostList.propTypes = {
  preparedPosts: TypePreparedPosts.isRequired,
};
