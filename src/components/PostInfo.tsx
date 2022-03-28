import React from 'react';
import { Post } from '../types/post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = Post;

export const PostInfo: React.FC<Props> = (
  {
    title,
    body,
    user,
    comments,
  },
) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <div>
      {user
        && (
          <UserInfo
            name={user.name}
            username={user.username}
            id={user.id}
            email={user.email}
          />
        )}
    </div>
    <div>
      <CommentList comments={comments} />
    </div>
  </>
);
