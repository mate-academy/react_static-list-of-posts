import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import { Users } from '../../types/Users';
import { Comments } from '../../types/Comments';
import { Posts } from '../../types/Posts';

type Props = {
  post: Posts
  user: Users;
  comments: Comments[];
  userId: number;
};

export const PostInfo: React.FC<Props> = ({
  post,
  user,
  comments,
  userId,
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        <UserInfo {...user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />
    <CommentList comments={comments} userId={userId} />
  </div>
);
