import React from 'react';
import { Post } from '../../Types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({
  post: {
    title, body, user, comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      {user && <UserInfo user={user} />}
    </div>
    <p className="PostInfo__body">
      {body}
    </p>
    <hr />
    {comments.length === 0 && (
      <b data-cy="NoCommentsMessage"> No comments yet </b>
    )}
    {comments.length > 0 && <CommentList comments={comments} />}
  </div>
);
