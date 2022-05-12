import React from 'react';
import { Post } from '../../types';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post" data-cy="post-info">
    <div className="post__wrapper">
      <div className="post__user">
        {post.user ? (<UserInfo user={post.user} />) : 'Unknown User'}
      </div>
      <div>
        <h2 className="post__title" data-cy="post-title">
          {post.title}
        </h2>
        <p className="post__text" data-cy="post-body">
          {post.body}
        </p>
      </div>
    </div>
    <CommentList comments={post.comments} />
  </div>
);
