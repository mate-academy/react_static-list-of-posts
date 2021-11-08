import React from 'react';
import { Post } from '../type/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type PostInfoType = {
  post: Post
};

export const PostInfo:React.FC<PostInfoType> = ({ post }) => (
  <>
    <h3>
      {`Стаття: №${post.id} ${post.title}`}
    </h3>
    <h4>{`Опис: ${post?.body}`}</h4>
    {post.user && <UserInfo user={post.user} />}
    {post.comments.length > 0 && <CommentList comments={post.comments} />}
  </>
);
