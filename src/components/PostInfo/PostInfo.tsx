import React from 'react';
import './PostInfo.scss';
import { PreparedPost } from '../../types/interfaces';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div data-cy="post-info">
      <h2 data-cy="post-title">{post.title}</h2>
      {post.user && <UserInfo user={post.user} />}
      <CommentList comments={post.comments} />
    </div>
  );
};

export default PostInfo;
