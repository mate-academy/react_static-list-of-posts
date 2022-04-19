import React from 'react';
import { Post } from '../Types/Types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import comments from '../../api/comments';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
  <p data-cy="post-title">
    {post.title}
  </p>
  <p data-cy="post-body">
    {post.body}
  </p>
    {post.user && <UserInfo user={post.user} />}
    <CommentList comments={comments.filter(comment => comment.postId === post.id)}/>
  </>
);
