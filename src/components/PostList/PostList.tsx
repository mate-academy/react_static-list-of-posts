import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';
import './PostList.scss';

type Props = {
  post: Post;
  comment: Comment[];
};

export const PostList: React.FC<Props> = ({ post }) => {
  const { user, comment } = post;

  return (
    <>
      <h2 className="post__title">
        {post.title}
      </h2>
      {user ? <UserInfo user={user} /> : ''}
      <div className="post__body">
        {post.body}
      </div>
      <hr />
      <h2>Commentaries</h2>
      {comment ? <CommentList comment={comment} /> : ''}
    </>
  );
};
