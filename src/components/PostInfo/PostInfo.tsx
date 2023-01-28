import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Post } from '../../Types/Post';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {post.user
        && <UserInfo name={post.user.name} email={post.user.email} />}
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />
      {post.comments.length
        ? (<CommentList comments={post.comments} />)
        : (<b data-cy="NoCommentsMessage">No comments yet</b>)}
    </div>
  </>
);
