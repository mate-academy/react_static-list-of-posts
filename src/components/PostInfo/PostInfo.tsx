import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post__content">
      <h1 className="post__title">{post.title}</h1>
      <p className="post__body">{post.body}</p>
      created by
      <UserInfo user={post.user} />
    </div>
    <CommentList comments={post.comment} />
  </>
);
