import React from 'react';
import UserInfo from './UserInfo';
import CommentList from './CommentList';
import { Post } from '../types/Post';

interface Props {
  post: Post;
}

const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h1 className="post-title">{post.title}</h1>
    <p className="post-text">{post.body}</p>
    <div className="details">
      {post.user && (
        <UserInfo user={post.user} />
      )}

    </div>
    <p className="comments-title">Comments</p>
    <CommentList comments={post.comments} />
  </>

);

export default PostInfo;
