import React from 'react';
import capitalizeFirstLetter from '../../functions/capitalizeFirstLetter';
import { PreparedPost } from '../../types/PreparedPost';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <article className="post" data-cy="post-info">
    {(post.user) && (
      <UserInfo user={post.user} />
    )}

    <div className="post__shifted">
      <h2 className="post__title" data-cy="post-title">
        {capitalizeFirstLetter(post.title)}
      </h2>

      <p className="post__body" data-cy="post-body">
        {capitalizeFirstLetter(post.body)}
      </p>
    </div>

    <h3 className="post__comments-title">{`${post.comments.length} comments`}</h3>

    {(post.comments.length > 0) && (
      <div className="post__shifted">
        <CommentList comments={post.comments} />
      </div>
    )}
  </article>
);
