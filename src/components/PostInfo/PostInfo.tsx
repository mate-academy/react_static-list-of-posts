import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { PreparedPost } from '../../types/PreparedPost';

interface Props {
  post: PreparedPost
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

    <CommentList comments={post.comments} />
  </div>
);
