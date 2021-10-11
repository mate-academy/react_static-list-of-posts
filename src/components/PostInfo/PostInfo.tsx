import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../types/Post';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post">
      <h2 className="post__title">{post.title}</h2>
      <p className="post__body">{post.body}</p>
    </div>
    {post.user
      && <UserInfo user={post.user} />}
    {post.comments
      && <CommentList comments={post.comments} />}
  </>
);
