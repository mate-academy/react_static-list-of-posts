import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';

type Props = {
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
