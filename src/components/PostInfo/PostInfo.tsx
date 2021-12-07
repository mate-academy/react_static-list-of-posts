import React from 'react';

import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <>
      <h2 className="postList__title">
        {post.title}
      </h2>

      <div className="postList__description">
        {post.body}
      </div>

      <div className="postList__userInfo">
        {post.user && <UserInfo user={post.user} />}
      </div>

      <div className="postList__commentsInfo">
        {post.comments && <CommentList comments={post.comments} />}
      </div>
    </>
  );
};
