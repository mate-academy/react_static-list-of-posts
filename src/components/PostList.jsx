import React from 'react';
import { PostListPropTypes } from '../propTypes/postList';
import { Post } from './Post';
import '../App.scss';

export function PostList({ posts }) {
  return (
    <div className="post-list__container">
      <h1 className="post-list__title">Static list of posts</h1>
      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      ))}
    </div>
  );
}

PostList.propTypes = PostListPropTypes;
