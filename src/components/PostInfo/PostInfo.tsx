import React from 'react';
import { User } from '../../types/users';
import { Post } from '../../types/posts';
import { Comment } from '../../types/comments';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface PostInfoProps {
  user: User | undefined;
  post: Post;
  postcomments: Comment[];
}

export const PostInfo: React.FC<PostInfoProps>
  = ({ user, post, postcomments }) => (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <UserInfo user={user} />

      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>
      <CommentList commentsFromServer={postcomments} />
    </div>
  );
