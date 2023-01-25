import React from 'react';

import './PostInfo.scss';

import { FullPost } from '../../types/FullPosts';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface Props {
  post: FullPost
}
export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}

        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>
    <p className="PostInfo__body">
      {post.body}
    </p>
    <hr />

    {post.comments.length === 0
      ? <b data-cy="NoCommentsMessage">No comments yet</b>
      : <CommentList comments={post.comments} />}

  </div>
);
