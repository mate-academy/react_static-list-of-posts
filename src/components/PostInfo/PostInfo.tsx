import React from 'react';
import { PreparedPost } from '../../api/types/PreparedPost';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="card-content">
    <p className="title">
      {post.title}
    </p>
    <p className="content">
      {post.body}
    </p>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </div>
);
