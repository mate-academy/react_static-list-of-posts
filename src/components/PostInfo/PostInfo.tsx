import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = props => {
  const {
    post: {
      title,
      body,
      user,
      comments,
    },
  } = props;

  return user && (
    <article className="post-list__item post column is-12-mobile is-6-tablet is-5-desktop block card">
      <div className="card-content">
        <UserInfo
          name={user.name}
          email={user.email}
        />
      </div>
      <div className="box">
        <h2 className="title">
          {title}
        </h2>
      </div>
      <div className="card-content">
        {body}
      </div>
      <div className="card-footer">
        <CommentList comments={comments} />
      </div>
    </article>
  );
};
