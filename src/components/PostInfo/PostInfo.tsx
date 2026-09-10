import React from 'react';
import { type PreparedPostTypes } from '../PostList/PostList';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type PostInfoProps = {
  post: PreparedPostTypes;
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by '}

          {post.user && <UserInfo user={post.user} />}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {post.comments.length ? (
        <CommentList comments={post.comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
// No comments yet
