import React from 'react';

import { Users } from '../../types/Users';
import { Comments } from '../../types/Comments';
import { Posts } from '../../types/Posts';

type Props = {
  post: Posts
  users: Users;
  comments: Comments;
};

export const PostInfo: React.FC<Props> = ({
  post,
  users,
  comments,
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {users}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />
    {comments}
  </div>
);
