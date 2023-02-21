import React from 'react';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';
import './PostInfo.scss';
import { CommentInfo } from '../CommentInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, comment,
  } = post;

  return (
    <article className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comment ? <CommentInfo comment={comment} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </article>
  );
};
