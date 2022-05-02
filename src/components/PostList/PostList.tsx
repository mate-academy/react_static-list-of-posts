import React from 'react';
import { PreparedPost } from '../../types/types';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type PostListArray = {
  postList: PreparedPost[];
};

export const PostList: React.FC<PostListArray> = ({ postList }) => (
  <ul className="PostList">
    {
      postList.map((post) => (
        <PostInfo
          key={post.id}
          userId={post.userId}
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
