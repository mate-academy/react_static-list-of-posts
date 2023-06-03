import React from 'react';

import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

interface PostInfoProps {
  post: Post;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    userId,
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && <UserInfo user={user} key={userId} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {!comments.length
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : <CommentList comments={comments} />}
    </div>
  );
};
