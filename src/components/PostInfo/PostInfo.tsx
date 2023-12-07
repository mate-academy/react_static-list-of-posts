import React from 'react';
import { Post } from '../../types/api.types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type PostInfoProps = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    userId,
    body,
    id,
    comments,
  } = post;

  return (

    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && (
          <UserInfo key={userId} user={user} />
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      <hr />
      {
        comments.length ? (
          <CommentList key={id} comments={comments} />
        ) : (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        )
      }
    </div>

  );
};
