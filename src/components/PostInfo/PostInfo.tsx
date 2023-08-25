import React from 'react';
import { PostData } from '../../types/PostData';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type PostProp = {
  post: PostData,
};

export const PostInfo: React.FC<PostProp> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {post.user && <UserInfo user={post.user} />}

      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {post.comments.length > 0
      ? <CommentList comments={post.comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
