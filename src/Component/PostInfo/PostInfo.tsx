import React from 'react';
import { Post } from '../../Types';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './style.css';

type Props = {
  post: Post;
};
export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <>
      <li className="list">
        <div>
          { post.user ? <UserInfo user={post.user} /> : 'Unknown user'}
          <p>
            <b>Title</b>
            {' '}
            {post.title}
          </p>
          <span>{post.body}</span>
          <CommentList comments={post.comments} />
        </div>
      </li>
    </>
  );
};
