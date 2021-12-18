import React from 'react';
import CommentsList from '../CommentList/CommentList';
import { Comments } from '../types/Comment';
import { User } from '../types/User';
import UserInfo from '../UserInfo/UserInfo';

type Post = {
  title: string,
  body: string,
  user: User | undefined,
  comment: Comments[],
};

type Props = {
  post: Post,
};

const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <UserInfo user={post.user} />
    <CommentsList comment={post.comment} />
  </>
);

export default PostInfo;
