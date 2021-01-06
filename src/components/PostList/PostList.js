import React from 'react';
import { Post } from '../Post';
import { TypePostList } from '../shapes/PostListTypes';

export const PostList = ({ posts }) => (
  <div className="post-list">

    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}

  </div>
);

PostList.propTypes = TypePostList;
