import React from 'react';

import Post from '../Post/Post';
import './PostList.css';
import { PostListProps } from '../PropTypes/PropTypes';

const PostList = ({ posts, commentList }) => (
  <div className="post-item">
    {posts.map(post => (
      <div className="post-wrapper">
        <Post post={post} key={post.id} commentList={commentList} />
      </div>
    ))}
  </div>
);

PostList.propTypes = PostListProps;

export default PostList;
