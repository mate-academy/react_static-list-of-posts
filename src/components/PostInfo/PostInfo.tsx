import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <a className="UserInfo" href={post.user?.email}>
          {post.user?.name}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    <b data-cy="NoCommentsMessage">
      {post.comments?.length
        ? <CommentList comments={post.comments} />
        : 'Not comment yet'}
    </b>

  </div>
);
