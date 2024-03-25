import React from 'react';
import { Post } from '../PostInfo/index';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type PostInfoProps = {
  post: Post;
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          Posted by <UserInfo user={post.user} />
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>
      {post.comments.length > 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <p data-cy="NoCommentsMessage">No comments yet.</p>
      )}
    </div>
  );
};
