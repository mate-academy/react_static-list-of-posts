import React from 'react';
import { Post } from '../types/Post';
import { UserInfo } from './UserInfo/UserInfo';
import { CommentList } from './CommentList/CommentList';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <p className="title">{post.title}</p>
    <p>{post.body}</p>
    <UserInfo user={post.user} />
    <div className="comments">
      <CommentList comments={post.comments} />
    </div>
  </>
);
