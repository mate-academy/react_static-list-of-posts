import React from 'react';
import { UserInfo } from '../UserInfo';
import { Posts } from '../../types/Posts';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

interface Props {
  post: Posts,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      {post.user && <UserInfo user={post.user} />}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comments.length === 0
      ? <b data-cy="NoCommentsMessage">No comments yet</b>
      : <CommentList comments={post.comments} />}
  </div>
);
