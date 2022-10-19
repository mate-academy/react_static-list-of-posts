import React from 'react';

import { CommentList } from '../CommentList';
import { PostInfo } from '../PostInfo';

// Types props
import { CommentItem } from '../CommentInfo';
import { UserItem } from '../UserInfo';

type Props = {
  posts: {
    user: UserItem[],
    title: string,
    body: string,
    id: number,
    comments: CommentItem[],
  }[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <div className="PostInfo" key={post.id}>
        <PostInfo {...post} />

        <hr />

        <CommentList comments={post.comments} />
      </div>
    ))}
  </div>
);
