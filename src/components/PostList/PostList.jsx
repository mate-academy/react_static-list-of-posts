import React from 'react';
import Post from '../Post/Post';
import CommentList from '../CommentList/CommentList';
import './PostList.scss';

function PostList({ postsData }) {
  return (
    <div className="postList">
      {postsData.map(post => (
        <div className="postList__post">
          <Post {...post} />
          <CommentList list={post.comments} />
        </div>
      ))}
    </div>
  );
}

export default PostList;
