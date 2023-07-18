import React from 'react';
import { Comment } from '../../types/Comment';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { User } from '../../types/User';

export type PostInfoProps = {
  post: PostWithComments;
};

export type PostWithComments = {
  id: number;
  user: User | undefined;
  title: string;
  body: string;
  comments: Comment[];
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
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

        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <CommentList comments={comments} />
    </div>
  );
};
