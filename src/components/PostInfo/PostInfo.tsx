import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

interface PostInfoProps {
  post: PreparedPosts,
}
export const PostInfo: React.FC<PostInfoProps> = ({ post }: PostInfoProps) => (
  <div className="post__block" data-cy="post-info">
    <div data-cy="post-title">
      <h2>
        {post.title}
      </h2>
      <p className="post_info_body" data-cy="post-body">{post.body}</p>
      {post.user && (<UserInfo user={post.user} />)}
      {post.comments && (<CommentList comments={post.comments} />)}
    </div>
  </div>
);
