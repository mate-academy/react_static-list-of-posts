import React from 'react';
import './PostInfo.scss';
import { PreparedPost } from '../../react-app-env';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p className="postBody">
      {post.body}
    </p>
    <div>
      {post.user && (
        <UserInfo user={post.user} />
      )}
    </div>
    <div><CommentList comments={post.comment} /></div>
  </div>
);
