import React from 'react';
import './PostInfo.scss';
import Post from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post">
      {post.user !== null ? <UserInfo user={post.user} /> : null}
      <h2 className="post__title">{post.title}</h2>
      <p className="post__body">{post.body}</p>
      <CommentList comments={post.comment} />
    </div>
  </>
);
