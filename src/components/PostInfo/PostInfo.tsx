import React from 'react';

import { Post } from '../../types/interfaces';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <h2 className="post__title" data-cy="post-title">
      {post.title}
    </h2>
    <p className="post__user">
      {
        (post.user)
          ? (
            <UserInfo
              user={post.user}
            />
          )
          : 'No user data'
      }
    </p>
    <p className="post__body" data-cy="post-body">
      {post.body}
    </p>
    <p>
      <CommentList comments={post.comment} />
    </p>
  </div>
);
