import React from 'react';
import { Post } from '../../types/post';
import UserInfo from '../UserInfo';
import CommentList from '../CommentList';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <>
      <div className="post">
        <h2 className="post_title" data-cy="post-title">{post.title}</h2>
        <p className="post_body" data-cy="post-body"><i>{post.body}</i></p>
      </div>
      <hr />
      <div data-cy="post-info">
        {post.user && (
          <UserInfo
            name={post.user.name}
            email={post.user.email}
          />
        )}
      </div>
      {post.comments && (
        <CommentList comments={post.comments} />
      )}
    </>
  );
};
