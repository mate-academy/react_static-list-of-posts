import React from 'react';
import { Post } from '../../Types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

interface PostInfoProps {
  post: Post;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const comments = post.comments.length
    ? <CommentList comments={post.comments} />
    : <b data-cy="NoCommentsMessage">No comments yet</b>;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {post.user && <UserInfo user={post.user} />}
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {comments}
    </div>
  );
};
