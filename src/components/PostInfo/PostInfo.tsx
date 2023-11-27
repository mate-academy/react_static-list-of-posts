import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type PostInfoProps = {
  post: Post,
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    title, body, user, comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {user ? <UserInfo user={user} /> : null}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments !== null
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
