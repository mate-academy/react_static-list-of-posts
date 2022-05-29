import React from 'react';
import { FullPost } from '../../react-app-env';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post: FullPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="postInfo__title">
      {post.title}
    </h2>
    <p>
      {`Post: ${post.body}`}
    </p>

    {
      post.user
        && (
          <UserInfo
            user={post.user}
          />
        )
    }

    {
      post.comment
        && (
          <CommentList
            comments={post.comment}
          />
        )
    }
  </>
);
