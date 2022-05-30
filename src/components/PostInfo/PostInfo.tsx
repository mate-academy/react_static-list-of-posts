import React from 'react';
import { PrepearedPost } from '../../types/PrepearedPosts';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { CommentList } from '../CommentList/CommentList';
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
      { (post.comments)
        ? <CommentList postComments={post.comments} />
        : ''}
    </div>
    <div className="post__author">
      <p className="post__author-name">
        {post.user?.username}
      </p>
      <p className="post__author-email">
        {post.user?.email}
      </p>
    </div>
    { (post.comments)
      ? <CommentInfo singleComment={post.comments[0]} />
      : ''}
  </div>
);
