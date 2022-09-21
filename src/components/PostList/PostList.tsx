import React from 'react';

import { PostInfo } from '../PostInfo';

import { PostListType } from '../../types/PostListType';

type PostListTypes = {
  posts: PostListType[];
};

export const PostList: React.FC<PostListTypes> = ({ posts }) => (
  <div className="PostList">
    {posts.map(el => (
      <PostInfo
        userId={el.userId}
        id={el.id}
        title={el.title}
        body={el.body}
        user={el.user}
        comments={el.comments}
        key={el.id}
      />
    ))}
  </div>
);
