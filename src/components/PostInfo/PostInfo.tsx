import React from 'react';
import './PostInfo.scss';
import { Posts } from '../../types/Posts';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';

type Prop = {
  post: Posts,
};

export const PostInfo: React.FC<Prop> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        { user && <UserInfo key={user.id} user={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      {comments.length !== 0
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
