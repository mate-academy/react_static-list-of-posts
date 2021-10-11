import React from 'react';
import { Post } from '../../Types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';
import { CommentsInfo } from '../CommentsInfo/CommentsInfo';

export const PostInfo: React.FC<{ postInfo: Post }> = ({ postInfo }) => (
  <div className="post">
    <h2 className="post__title">{postInfo.title}</h2>
    <p className="post__text">{postInfo.body}</p>
    {postInfo.user && (
      <UserInfo user={postInfo.user} />
    )}
    <CommentsInfo comments={postInfo.comments} />
  </div>
);
