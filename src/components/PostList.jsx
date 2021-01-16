import React from 'react';
import { Post } from './Post';
import { PostListType } from './Types';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="postBlock">
    <ul>
      {posts.map(post => (
        <li key={post.id}>

          <Post post={post} />

        </li>
      ))}
    </ul>
  </div>
);

PostList.propTypes = PostListType.isRequired;
