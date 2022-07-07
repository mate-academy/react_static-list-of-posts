import React from 'react';
import { Comment } from '../CommentInfo/CommentInfo';
import { CommentList } from '../CommentList/CommentList';
import { User, UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

export interface Post {
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}

type Props = {
  post: Post;
};

export const PostInfo:React.FC<Props> = ({ post }) => (
  <div className="post">
    <div data-cy="post-title">{post.title}</div>
    <div data-cy="post-body">{post.body}</div>

    <div className="post-info">
      <UserInfo user={post.user} />
      <CommentList comments={post.comments} />
    </div>
  </div>
);
