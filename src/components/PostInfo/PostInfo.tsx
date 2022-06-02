import React from 'react';
import { PrepearedPost } from '../../types/PrepearedPosts';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

interface Props {
  post: PrepearedPost,
}
export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <h2 className="post__title" data-cy="post-title">
      {post.title}
    </h2>
    <p className="post__body" data-cy="post-body">
      {post.body}
    </p>
    <div className="post__comments comment">
      <CommentList postComments={post.comment} />
    </div>
    <div className="post__author">
      {(post.user) && <UserInfo user={post.user} /> }
    </div>
  </div>
);
