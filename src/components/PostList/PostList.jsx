import React from 'react';
import { Post } from '../Post/Post';
import './PostList.scss';

export const PostList = ({ preparedPosts }) => (
  <ul className="postList">
    {preparedPosts.map(post => (
      <li key={post.id} className="post">
        <Post {...post}/>
      </li>
    ))}
  </ul>
);
