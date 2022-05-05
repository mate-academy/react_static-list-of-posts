import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo">
      <h2 data-cy="post-title" className="PostInfo__title">
        Post title:
        <br />
        {`${post.title}`}
      </h2>
      <p data-cy="post-body">{post.body}</p>
      <p>
        {
          (post.user)
            ? (
              <UserInfo
                user={post.user}
              />
            ) : 'No information'
        }
      </p>
    </div>

    <CommentList
      comments={post.comments}
    />
  </>
);
