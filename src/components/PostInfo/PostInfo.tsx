import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    userId,
    title,
    body,
    comments,
    user,
  } = post;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            {title}
          </h3>
          <UserInfo key={userId} user={user} />
        </div>
        <p className="PostInfo__body">
          {body}
        </p>
        <CommentList comments={comments} />
      </div>
    </>
  );
};
