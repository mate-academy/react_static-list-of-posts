import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

type PostInfoItem = {
  post: Post;
};

export const PostInfo: React.FC<PostInfoItem> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {post.user !== null
          ? <UserInfo user={post.user} />
          : ''}

      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {post.comment !== null
      ? <CommentList comments={post.comment} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
