import React from 'react';
import { Post } from '../Post/Post';
import './PostList.css';
import { PostListShape } from '../Shape';

export const PostList = ({ postList }) => (
  <div className="postList">
    {postList.map(item => (
      <div className="post">
        <Post key={item.id} {...item} />
      </div>
    ))
    }
  </div>
);

PostList.propTypes = PostListShape.isRequired;
