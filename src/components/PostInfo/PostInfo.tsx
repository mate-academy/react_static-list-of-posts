import React from 'react';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    body,
    title,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <UserInfo user={user} />

        <p className="PostInfo__body">{body}</p>
        <hr />
        {comments.length > 0 ? (
          <CommentList comments={comments} />
        ) : (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        )}
      </div>
    </div>
  );
};
