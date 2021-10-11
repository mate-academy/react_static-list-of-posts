import React from 'react';
import { Post } from '../../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => (
  <div className="PostInfo">
    {post.user && (
      <div className="PostInfo-User">
        <UserInfo user={post.user} />
      </div>
    )}
    <h2 className="PostInfo-Title">{post.title}</h2>
    <p className="PostInfo-Body">{post.body}</p>
    {post.comments.length && (
      <div className="PostInfo-Comments">
        <CommentList comments={post.comments} />
      </div>
    )}
  </div>
);
