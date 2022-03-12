import React from 'react';
import { Post } from '../types/interfaces';
import { CommentsList } from './CommentList';
import { UserInfo } from './UserInfo';

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <div className="post">
      <h2 className="post__title">{title}</h2>
      <p className="post__text">{body}</p>
      {user
        && (
          <UserInfo
            name={user.name}
            username={user.username}
            email={user.email}
          />
        )}
    </div>
    <div className="comments">
      {comments
        && (
          <CommentsList comments={comments} />
        )}
    </div>
  </>
);

type Props = Post;
