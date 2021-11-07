import React from 'react';
import { Posts } from '../type/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type PostInfoType = {
  post: Posts
};

export const PostInfo:React.FC<PostInfoType> = ({ post }) => (
  <>
    <h3>
      {`Стаття: №${post.id} ${post.title}`}
    </h3>
    <h4>{`Опис: ${post?.body}`}</h4>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </>
);
