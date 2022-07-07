import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div
      className="post"
      data-cy="post-info"
      key={post.id}
    >
      <h2 className="post__title" data-cy="post-title">{post.title}</h2>
      <p className="post__body" data-cy="post-body">{post.body}</p>
      {post.user && <UserInfo user={post.user} />}
      {post.comments && <CommentList comments={post.comments} />}
    </div>
  </>
);
