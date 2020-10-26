import React from 'react';
import { Post } from '../Post/Post';
import { PostListShape } from '../Shapes/PostListShape';

export const PostList = ({ posts }) => (
  <div className="postlist">
    {
      posts.map(post => (
        <Post {...post} key={post.id} />
      ))
    }
  </div>
);

PostList.propTypes = PostListShape;
