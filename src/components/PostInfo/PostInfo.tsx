import React from 'react';

import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = (props) => {
  const {
    post,
  } = props;

  return (
    <>
      <h2 className="post__title" data-cy="post-title">{post.title}</h2>
      <p className="post__body" data-cy="post-body">
        {post.body}
      </p>

      {post.user
        && (<UserInfo user={post.user} />
        )}
      {post.comment
        && (
          <CommentList comments={post.comment} />
        )}
    </>
  );
};
