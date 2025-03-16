import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';

type PostItemsProp = {
  postItems: Post;
};

export const PostInfo: React.FC<PostItemsProp> = ({ postItems }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{postItems.title}</h3>
        <p>
          {' Posted by  '}
          <UserInfo userData={postItems.user} />
        </p>
      </div>

      <p className="PostInfo__body">{postItems.body}</p>
      <CommentList userCommentsList={postItems.comments} />
    </div>
  );
};
