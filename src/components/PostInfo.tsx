import React from 'react';
import { PostPrepared } from '../types/PostPrepared';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

const PostInfo: React.FC<PostPrepared> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <div className="Post">
      <h2 className="Post__title">{title}</h2>
      <article className="Post__body">{body}</article>
    </div>
    {user && (
      <UserInfo {...user} />
    )}
    <CommentList commentsList={comments} />
  </>
);

export default PostInfo;
