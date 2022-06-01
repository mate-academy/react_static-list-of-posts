import React from 'react';
import './PostInfo.scss';
import { PreparedPost } from '../../react-app-env';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div>
    <h2 data-cy="post-title">
      {post.title}
    </h2>
    <p className="postBody" data-cy="post-body">
      {post.body}
    </p>
    <div data-cy="post-info">
      {post.user && (
        <UserInfo user={post.user} />
      )}
    </div>
    <div><CommentList comments={post.comment} /></div>
  </div>
);
