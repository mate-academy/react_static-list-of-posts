import React from 'react';
import './PostInfo.scss';
import { PreparedPost } from '../../react-app-env';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

interface Props {
  post: PreparedPost,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="main-post">
      <h2 className="post-title" data-cy="post-title">
        {post.title}
      </h2>
      <p className="post-text" data-cy="post-body">
        {post.body}
      </p>

      {post.user && (
        <UserInfo user={post.user} />
      )}
    </div>
    <CommentList comments={post.comments} />
  </>
);
