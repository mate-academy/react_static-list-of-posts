import React from 'react';
import { Post } from '../Post/Post';
import './PostList.scss';
import { PostListType } from '../Types';

export const PostList = ({ posts }) => (
  <div className="postList">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = PostListType.isRequired;
