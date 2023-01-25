import React from 'react';
import { FullPostType } from '../../types/FullPost';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

interface PostInfoPropsType {
  post: FullPostType;
}

export const PostInfo: React.FC<PostInfoPropsType> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}
        {post.user
          ? <UserInfo user={post.user} />
          : 'Anonymus'}
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
