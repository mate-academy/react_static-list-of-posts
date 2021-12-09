import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = Omit<Post, 'id'>;

export const PostInfo: React.FC<Props> = (
  {
    user, comments, body, title,
  },
) => (
  <>
    {
      user
      && (
        <div className="post__user">
          <UserInfo
            name={user.name}
            email={user.email}
          />
          <div className="post__user-text">
            <h2 className="post__title">{title}</h2>
            <div className="post__body">{body}</div>
          </div>
        </div>
      )
    }

    <CommentList comments={comments} />
  </>
);
