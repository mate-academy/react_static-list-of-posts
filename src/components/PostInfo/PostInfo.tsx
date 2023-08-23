import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type PostProps = {
  post: Post;
};

export const PostInfo: React.FC<PostProps> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      {post.user
        && <UserInfo user={post.user} key={post.userId} />}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>
    <hr />
    {post.comments.length !== 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
