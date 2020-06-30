import React from 'react';
import { Post } from '../Post/Post';
import './PostList.css';
import { PostListShape } from '../Shape';

export const PostList = props => (
  <ul className="postList">
    {props.posts.map(post => (
      <li key={post.id} className="post">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = PostListShape.isRequired;
