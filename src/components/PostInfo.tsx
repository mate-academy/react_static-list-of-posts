import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UsersInfo';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => (
  <div className="PostInfo" key={post.id}>
    <h2 className="PostInfo-Title">
      {post.title}
    </h2>

    <p className="PostInfo-Body">
      {post.body}
    </p>
    <div className="PostInfo-User">
      {post.user && (
        <UserInfo user={post.user} />
      )}
    </div>
    <div className="PostInfo-Comments">
      <CommentList comments={post.comments} />
    </div>
  </div>
);
