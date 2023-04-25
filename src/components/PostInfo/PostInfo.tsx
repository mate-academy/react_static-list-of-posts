import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';

type TypePostInfo = {
  post: Post;
};

export const PostInfo: React.FC<TypePostInfo> = ({ post }) => {
  const {
    comments,
    user,
    title,
    body,
  } = post;

  const PrintedComents = comments.length > 0
    ? <CommentList comments={comments} />
    : <b data-cy="NoCommentsMessage">No comments yet</b>;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}
          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      {PrintedComents}
    </div>
  );
};
