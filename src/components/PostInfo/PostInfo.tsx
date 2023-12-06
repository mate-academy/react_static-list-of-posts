import React from 'react';
import { PostInfoProps } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        Posted by
        <UserInfo user={post.user} />
      </p>
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <hr />
    {post.comments && post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <p data-cy="NoCommentsMessage">No comments yet</p>
    )}
  </div>
);
