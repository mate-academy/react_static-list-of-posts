import React from 'react';
import './PostList.scss';

import { CommentList } from '../CommentList';
import { PostInfo } from '../PostInfo';
import { UserInfo } from '../UserInfo';

import { Post } from '../Types/Types';

type Props = {
  commonArr: Post[],
};

export const PostList: React.FC<Props> = ({ commonArr }) => (
  <div>
    {[...commonArr].map(post => {
      return (
        <div className="post" key={post.id} data-cy="post-info">
          <div className="post__info">
            <div className="post__info-title">
              <PostInfo title={post.title} body={post.body} />
            </div>
            <div className="post__info-user">
              <UserInfo name={post.user.name} email={post.user.email} />
            </div>
          </div>

          <div className="post__list">
            <CommentList comments={post.comments} />
          </div>

        </div>
      );
    })}
  </div>
);
