import React from 'react';
import './PostInfo.scss';
import { PreparedPost } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

interface Props {
  post: PreparedPost,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info">
    <div className="post-info">
      <h3 className="post-info__title" data-cy="post-title">
        {post.title}
      </h3>
      <div>
        {post.user && (
          <UserInfo user={post.user} />
        )}
      </div>
      <p className="post-info__body" data-cy="post-body">
        {post.body}
      </p>
    </div>
    <CommentList comments={post.comment} />
  </div>
);
