import React from 'react';
import { type Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.css';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const hasComments = post.comments && post.comments.length > 0;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {post.user && (
          <p>
            Posted by <UserInfo user={post.user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {!hasComments ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={post.comments!} />
      )}
    </div>
  );
};
