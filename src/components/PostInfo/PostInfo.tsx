import React from 'react';

import { UserInfo } from '../UserInfo';

import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }, { key }) => (
  <>
    <div className="PostInfo" key={key}>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {post.comments.length === 0
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : <CommentList comments={post.comments} />}
    </div>
  </>
);
