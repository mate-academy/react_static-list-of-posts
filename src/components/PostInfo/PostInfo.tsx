import React from 'react';

import { Post } from '../../types/Post';

import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const postComments = post.comments.length > 0
    ? (<CommentList comments={post.comments} />)
    : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );

  const user = post.user
    ? (<UserInfo user={post.user} />)
    : null;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {user}
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      {postComments}
    </div>
  );
};
