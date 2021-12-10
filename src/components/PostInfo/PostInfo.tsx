import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { PreparedPost } from '../../type/preparedPost';
import { UserInfo } from '../UserInfo/UserInfo';

export type Props = {
  post: PreparedPost
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2>
      {post.title}
    </h2>
    <p>
      {post.body}
    </p>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </>
);
