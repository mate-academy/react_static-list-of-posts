import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    comments,
    title,
  } = post;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{ title }</h3>

          <p>
            {' Posted by '}
            {post.user && <UserInfo user={user} />}
          </p>
        </div>

        <p className="PostInfo__body">
          {comments && <CommentList comments={comments} />}
        </p>

        <hr />
      </div>
    </>
  );
};
