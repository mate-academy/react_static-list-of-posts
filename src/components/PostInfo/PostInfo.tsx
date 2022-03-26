import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post__title">{post.title}</h2>
    <span>{post.user && <UserInfo user={post.user} />}</span>
    <p>{post.body}</p>
    {post.comments && <CommentList comments={post.comments} />}
  </>
);
