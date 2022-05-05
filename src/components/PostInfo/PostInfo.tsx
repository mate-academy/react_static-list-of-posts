import React from 'react';
import { Post } from '../../interfaces/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    (!post.user)
    ?
    <div className="postInfo">
      <h2 className="postInfo__title">
        {post.title}
      </h2>
      <div className="postInfo__body">
        <article className="postInfo__content">
          {post.body}
        </article>
        <UserInfo user={post.user} />
        <div className="postInfo__commentsSection">
          <CommentList comments={post.comments} />
        </div>
      </div>
    </div>
    : null
  </>
);
