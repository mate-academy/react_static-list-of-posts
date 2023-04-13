import React from 'react';
import { UserInfo } from '../UserInfo';
// import { CommentInfo } from '../CommentInfo';
import { Post } from '../../types/posts';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {(post.user && <UserInfo user={post.user} />)}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comments.length ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
    <hr />
  </div>
);
