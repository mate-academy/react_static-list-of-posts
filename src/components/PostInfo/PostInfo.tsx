import React from 'react';
import './PostInfo.scss';

import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type PostInfoType = {
  post: Post,
};

export const PostInfo: React.FC<PostInfoType> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        <span>  Posted by  </span>
        {post.user && <UserInfo user={post.user} key={post.user.id} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {post.comments?.length
      ? <CommentList comments={post.comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
