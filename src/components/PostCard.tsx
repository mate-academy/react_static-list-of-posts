import React from 'react';
import { CommentsList } from './CommentsList';
import { UserInfo } from './UserInfo';
import { Post } from '../App';

export const PostCard: React.FC<{ post: Post; }> = ({ post }) => (
  <>
    <div className="post" key={post.id}>
      <div>
        <h2 className="post__title">
          {post.title}
        </h2>
        <p className="post__body">
          {post.body}
        </p>
      </div>

      {post.user && (
        <UserInfo user={post.user} />
      )}
    </div>
    <CommentsList comments={post.comments} />
  </>
);
