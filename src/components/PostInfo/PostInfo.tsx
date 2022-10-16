import React from 'react';

import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({ post, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}
        <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {(!comments[0]) ? (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    ) : (
      <CommentList comments={comments} />
    )}
  </div>
);
