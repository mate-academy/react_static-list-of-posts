import React from 'react';
import { PreparedPosts } from '../../app.typedefs';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  preparedPost: PreparedPosts;
};

export const PostInfo: React.FC<Props> = ({ preparedPost }) => (
  <>
    <p data-cy="post-title">{`Post title: ${preparedPost.title}`}</p>
    <p data-cy="post-body">{`Post content: ${preparedPost.body}`}</p>

    <div data-cy="post-info" className="post-info">
      {
        preparedPost.user && (
          <UserInfo user={preparedPost.user} />
        )
      }

      {
        preparedPost.comment && (
          <CommentList comments={preparedPost.comment} />
        )
      }
    </div>
  </>
);
