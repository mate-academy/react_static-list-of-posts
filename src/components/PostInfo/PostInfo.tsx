import React from 'react';
import { Post } from '../../types/post';
import UserInfo from '../UserInfo';
import CommentList from '../CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post">
      <h2 className="post__title">{post.title}</h2>
      <p className="post_body">{post.body}</p>
    </div>
    <hr />
    {
      post.user && (
        <UserInfo
          user={post.user}
        />
      )
    }
    {
      post.comments && (
        <CommentList comments={post.comments} />
      )
    }
  </>
);
