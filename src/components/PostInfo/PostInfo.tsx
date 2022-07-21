import React from 'react';
import { PreparedPosts } from '../../types/PreparedPosts';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Prors = {
  post: PreparedPosts
};

export const PostInfo: React.FC<Prors> = ({ post }) => {
  const {
    title, user, body, comments,
  } = post;

  return (
    <div className="card" data-cy="post-info">
      <UserInfo user={user} />
      <h1 className="post-title" data-cy="post-title">
        {title}
      </h1>
      <h2 className="post-review" data-cy="post-body">
        {body}
      </h2>
      <CommentList comments={comments} />
    </div>
  );
};
