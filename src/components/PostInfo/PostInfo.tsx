import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';
import { CommentList } from '../CommentList';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const comments = post.foundComments || [];

  return (
    <div className="PostInfo" key={post.id}>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo user={post.foundUser} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
