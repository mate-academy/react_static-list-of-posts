import React from 'react';
import { Post } from '../Types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <>
      {post.user && <UserInfo user={post.user} />}
      <h3 className="post_title">{post.title}</h3>
      <p className="post_body">{post.body}</p>
      <CommentList comments={post.comments} />
    </>
  );
};
