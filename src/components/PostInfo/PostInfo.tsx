import React from 'react';
import './PostInfo.scss';

import { PreparedPost } from '../../types/preparedPost';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: PreparedPost
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="postInfo" data-cy="post-info">
      <h2 className="postInfo__title" data-cy="post-title">{post.title}</h2>
      <p className="postInfo__body" data-cy="post-body">{post.body}</p>
      <UserInfo user={post.user} />
      <CommentList comments={post.comments} />
    </div>
  </>
);
