import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentsList } from '../CommentsList/CommentsList';

import { Post } from '../../types/Posts';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="postInfo__title">
      {post.title}
    </h2>
    {
      (post.user)
        ? (
          <UserInfo
            user={post.user}
          />
        )
        : 'No user'
    }
    <p className="postInfo__body">
      {post.body}
    </p>
    {
      (post.comment)
        ? (
          <CommentsList comments={post.comment} />
        )
        : 'No user'
    }

  </>
);
