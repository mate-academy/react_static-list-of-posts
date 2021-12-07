import React from 'react';
import style from './PostInfo.module.css';
import { PreparedPost } from '../../types/Types';
import UserInfo from '../UserInfo/UserInfo';
import CommentList from '../CommentList/CommentList';

interface Props {
  post: PreparedPost,
}

const PostInfo: React.FC<Props> = ({ post }) => (
  <div className={style.post}>
    <h2 className={style.postTitle}>{post.title}</h2>
    <div className={style.postBody}>{post.body}</div>

    {post.user && (
      <UserInfo user={post.user} />
    )}

    {post.comments.length === 0
      ? (<p>0 comments</p>)
      : (<CommentList comments={post.comments} />)}
  </div>
);

export default PostInfo;
