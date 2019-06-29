import React from 'react';
import '../App.css';
import Post from './Post';

const PostList = ({posts, showComments, postItems}) => (
  <div className="post-list">
    {posts.map(post => (
      <div
        className="post"
        key={post.id}
      >
        <Post
          post={post}
          showComments={showComments}
          postItems={postItems}
        />
      </div>
    ))}
  </div>
)

export default PostList;