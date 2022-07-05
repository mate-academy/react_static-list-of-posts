import React from 'react';
import { ExtendedPost } from '../../app.typedef';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: ExtendedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div data-cy="post-info" className="post-info">
      <h2 data-cy="post-title" className="post-title">{title}</h2>
      <p data-cy="post-body" className="post-body">{body}</p>
      <UserInfo user={user} />
      <h3 className="post-comments">Comments</h3>
      <CommentList comments={comments} />
    </div>
  );
};
