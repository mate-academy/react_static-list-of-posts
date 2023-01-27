import React from 'react';
import { FullPost } from '../../react-app-env';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: FullPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        { user && <UserInfo user={user} />}
      </div>
      <p className="PostInfo__body">
        {body}
      </p>
      <CommentList comments={comments} />
    </div>
  );
};
