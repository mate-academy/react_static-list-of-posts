import React from 'react';
import { PostAllInfo } from '../../types/PreparedPost';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: PostAllInfo
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  post.user && (
    <li className="PostInfo" key={post.id}>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {
            post.user
              ? <UserInfo user={post.user} />
              : <p className="UserInfo">Unknown</p>
          }

        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {
        post.comments.length === 0
          ? <b data-cy="NoCommentsMessage">No comments yet</b>
          : <CommentList comments={post.comments} />
      }

    </li>
  )
);
