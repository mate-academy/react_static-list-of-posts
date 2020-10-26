import React from 'react';
import { Post } from '../Post/Post';
import { PostListShape } from '../shapes/PostListShape';

export const PostList = ({ posts }) => (
  <div className="post">
    {
      posts.map(post => (
        <Post {...post} key={post.id} />
      ))
    }
  </div>
);

PostList.propTypes = PostListShape;
