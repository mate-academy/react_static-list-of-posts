import React from 'react';
import { DataList } from '../../types/DataList';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: DataList;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <>
      <h2 className="post__title" data-cy="post-title">
        {post.title}
      </h2>
      <p className="post__body" data-cy="post-body">
        {post.body}
      </p>
      {post.user ? <UserInfo user={post.user} /> : <p>No such User info</p>}
      <CommentList comments={post.comments} />
    </>
  );
};
