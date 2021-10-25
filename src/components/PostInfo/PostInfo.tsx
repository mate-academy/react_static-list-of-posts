import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Posts';
import { UserInfo } from '../UserInfo';
import { CommentInfo } from '../CommentInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <h3 className="post__title post__title--underline">Post</h3>
    <div className="post__user">
      <UserInfo user={post.user} />
    </div>

    <div className="post__content">
      <div className="post__title">
        { post.title }
      </div>

      <div className="post__body">
        { post.body }
      </div>
    </div>

    <div className="post__comments">
      <h3 className="post__title">Comments</h3>
      { post.commentList.map(comment => (
        <CommentInfo comment={comment} />
      )) }
    </div>
  </div>
);
