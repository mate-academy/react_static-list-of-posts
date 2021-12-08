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
        <UserInfo
          user={user}
          body={body}
          title={title}
        />
      )
    }

    <CommentList comments={comments} />
  </>
);
