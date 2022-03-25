import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <div className="postInfo">
        <p className="postInfo__title">{post.title}</p>
        <p className="postInfo__body">{post.body}</p>
      </div>
      {post.user && <UserInfo user={post.user} /> }
      <CommentList comments={post.comments} />
    </div>
  );
};
