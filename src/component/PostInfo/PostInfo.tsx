import React from 'react';

import './PostInfo.scss';

import { PreparedPost } from '../../types/PreparedPost';
import { UserInfo } from '../UserInfo';
import { CommentInfo } from '../CommentInfo';

interface Props {
  post: PreparedPost,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    {
      post.user
        ? <UserInfo user={post.user} />
        : <span className="post__user">No user</span>
    }
    <div className="post__comments comments">
      Comments:
      {post.comments.map(comment => (
        <div
          key={comment.id}
          className="comments__item comment"
        >
          <CommentInfo comment={comment} />
        </div>
      ))}
    </div>
  </>
);
