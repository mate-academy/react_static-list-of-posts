import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    {post.user && (
      <div className="posts__user">
        <UserInfo user={post.user} />
      </div>
    )}

    <div className="posts__body">
      <h2 className="posts__title">
        {post.title}
      </h2>

      <p className="posts__text">
        {post.body}
      </p>
    </div>

    <div className="comments">
      <h3 className="comments__heading">
        Comments
      </h3>

      {post.comments
        ? <CommentList comments={post.comments} />
        : 'No comments yet'}
    </div>
  </>
);
