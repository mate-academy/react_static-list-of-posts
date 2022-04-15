import React from 'react';
import { User } from '../types/User';
import { Post } from '../types/Post';
import { Comment } from '../types/Comment';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  postInfo: Post;
  user: User | null;
  comment: Comment[];
};

export const PostInfo: React.FC<Props> = ({ postInfo }) => (
  <>
    <p data-cy="post-title">{postInfo.title}</p>
    <p data-cy="post-body">{postInfo.body}</p>
    {postInfo.user && <UserInfo user={postInfo.user} />}
    {postInfo.comment && <CommentList comments={postInfo.comment} />}
  </>
);
