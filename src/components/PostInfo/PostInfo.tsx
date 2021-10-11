import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

import { PreparedPost } from '../../types/PreparedPost';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './PostInfo.scss';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post-info">
    <div className="post-info__wrapper">
      <h2 className="post-info__title">
        {post.title}
      </h2>
      <p className="post-info__body">
        {post.body}
      </p>
      {
        post.user && (
          <UserInfo user={post.user} />
        )
      }
    </div>
    <div className="post-info__comments">
      {post.comments
        && (post.comments.map(comment => (
          <CommentInfo comment={comment} />
        )))}
    </div>
  </div>
);
