import React from 'react';
import { Post } from '../../types/Post';
import CommentList from '../CommentsList';
import UserInfo from '../UserInfo';

type Props = Omit<Post, 'id'>;

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2 className="post__title">{title}</h2>
    <div className="user">
      <UserInfo user={user} />
    </div>
    <p className="post__body">{body}</p>
    <CommentList comments={comments} />
  </>
);
