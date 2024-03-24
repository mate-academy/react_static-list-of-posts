import React from 'react';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { Comment } from '../../types/comments';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface PostProps {
  post: Post;
  user: User | undefined;
  comments: Comment[];
}

export const PostInfo: React.FC<PostProps> = ({ post, user, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      {user && (
        <p>
          {' Posted by  '}
          <UserInfo user={user} />
        </p>
      )}
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList comments={comments} />
  </div>
);
