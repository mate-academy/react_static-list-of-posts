import React from 'react';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';
import { CommentsList } from '../CommentsList';
import { Post } from '../../types/Post';

type Props = Post;

export const PostInfo: React.FC<Props> = ({
  id, title, body, user, comments,
}) => {
  return (
    <article className="post App__posts-item">
      <div className="post__id-wrapper">
        <span className="post__id">{id}</span>
      </div>

      <h2 className="post__title">{title}</h2>

      <p className="post__body">{body}</p>

      {user && <UserInfo name={user.name} email={user.email} />}

      {comments && <CommentsList comments={comments} />}
    </article>
  );
};
