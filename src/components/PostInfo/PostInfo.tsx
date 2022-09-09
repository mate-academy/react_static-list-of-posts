import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { PostsToRender } from '../../types/posts';

type Props = {
  post: PostsToRender;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    comments,
    title,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          {post.user && <UserInfo user={user} />}

        </p>
      </div>

      <p className="PostInfo__body">
        {comments && <CommentList comments={comments} />}
      </p>

      <hr />

    </div>
  );
};
