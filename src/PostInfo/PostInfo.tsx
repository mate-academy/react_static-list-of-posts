import React from 'react';
import { Post } from '../types';
import UserInfo from '../UserInfo/UserInfo';
import CommentList from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: Post;
};

const PostInfo:React.FC<Props> = ({ post }) => {
  return (
    <>
      {post.user && <UserInfo user={post.user} /> }
      <div>
        <div className="postInfo__title">{post.title}</div>
        <div>{post.body}</div>
      </div>
      <CommentList comments={post.comments} />
    </>
  );
};

export default PostInfo;
