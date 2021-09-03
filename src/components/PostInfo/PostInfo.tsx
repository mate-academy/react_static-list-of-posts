import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

interface Prop {
  posts: Post;
}

export const PostInfo: React.FC<Prop> = ({ posts }) => {
  const {
    title,
    body,
    user,
    commentsFromUsers,
  } = posts;

  return (
    <>
      <h1 className="post__title">
        {title}
      </h1>
      {user && (<UserInfo user={user} />)}
      <div className="post__body">
        {body}
      </div>
      <div className="post__comments">
        {commentsFromUsers && <CommentList comments={commentsFromUsers} />}
      </div>
    </>
  );
};
