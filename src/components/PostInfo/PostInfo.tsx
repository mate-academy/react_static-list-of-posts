import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    title,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="postInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        {post.user && (
          <p>
            {' Posted by '}
            {user && <UserInfo user={user} />}
          </p>
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      { comments.length
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
