import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';
import { EmptyComments } from '../EmptyComments/EmptyComments';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    comments,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {
          user
            ? <UserInfo user={user} />
            : <span>anonymous</span>
        }
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        comments.length
          ? <CommentList comments={comments} />
          : <EmptyComments />
      }
    </div>
  );
};
