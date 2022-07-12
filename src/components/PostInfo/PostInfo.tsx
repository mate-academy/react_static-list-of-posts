import React from 'react';
import { PreparedPost } from '../../types/types';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostList__PostInfo PostInfo">
    <div className="PostInfo__header">
      <h2 className="PostInfo__title">{post.title}</h2>

      {' Posted by  '}

      {post.user
        ? (
          <UserInfo user={post.user} />
        )
        : ''}

    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    <b>
      {post.comments.length
        ? `${post.comments.length} comments left`
        : 'No comments yet'}
    </b>

    <div>
      <CommentList comments={post.comments} />
    </div>

  </div>
);
