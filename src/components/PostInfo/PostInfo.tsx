import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';
import { Post } from '../../types/Post';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>

    {post.user && <UserInfo user={post.user} />}

    <CommentList comments={post.comments} />
  </div>
);
