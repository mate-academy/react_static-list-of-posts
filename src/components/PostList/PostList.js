import React from 'react';
import { Post } from '../Post/Post';
import './PostList.scss';
import { PostListType } from '../Types';

export const PostList = ({ preparedPosts }) => (
  <div className="postList">
    {preparedPosts.map(post => (
      <Post
        body={post.body}
        user={post.user}
        comments={post.comments}
        title={post.title}
        key={post.id}
      />
    ))}
  </div>
);

PostList.propTypes = PostListType.isRequired;
