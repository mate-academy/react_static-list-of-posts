import React from 'react';
import { CommentList } from '../CommentList/CommentList';

import { Post, PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <div className="posts">
    {posts.map(post => (
      <div className="post" key={post.id}>
        <UserInfo user={post.user} />
        <PostInfo title={post.title} body={post.body} />
        <CommentList comments={post.comments} />
      </div>
    ))}
  </div>
);
