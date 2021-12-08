import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { Post } from '../../types/Post';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <div className="post__title">{post.title}</div>
    <div className="post__text">{post.body}</div>
    <img className="post__image" src="https://www.pinclipart.com/picdir/big/161-1619821_vector-illustration-of-electronic-mail-email-correspondence-mail.png" alt="" />
    {post.user && <UserInfo user={post.user} />}
    <CommentList comments={post.comments} />
  </div>
);
