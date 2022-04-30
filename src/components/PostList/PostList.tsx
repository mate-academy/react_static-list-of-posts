import React from 'react';
import { PreparedPost } from '../../types/types';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type PostListArray = {
  postList: PreparedPost[];
};

export const PostList: React.FC<PostListArray> = ({ postList }) => (
  <ul data-cy="post-info" className="PostList">
    {
      postList.map((post) => (
        <PostInfo
          id={post.id}
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      ))
    }
  </ul>
);
