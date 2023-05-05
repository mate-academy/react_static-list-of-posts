import React from 'react';
import { PostStructure } from '../../types/PostStructure';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: PostStructure;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      <CommentList comments={comments} />
    </div>
  );
};
