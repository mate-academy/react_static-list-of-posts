import React from 'react';
import { Posts } from '../../types/Posts';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Posts
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        {post.user && (<UserInfo user={post.user} />)}
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />
      {
        post.comments.length
          ? (<CommentList comments={post.comments} />)
          : (<b data-cy="NoCommentsMessage">No comments yet</b>)
      }
    </div>
  </>
);
