import React from 'react';

import { CommentList } from '../CommentList';
import { PostInfo } from '../PostInfo';

// Types props
import { CommentItem } from '../CommentInfo';
import { UserItem } from '../UserInfo';

type Props = {
  postsArray: {
    user: UserItem | undefined,
    title: string,
    body: string,
    id: number,
    comments: CommentItem[],
  }[]
};

export const PostList: React.FC<Props> = ({ postsArray }) => (
  <div className="PostList">
    {postsArray.map((post) => (
      <div className="PostInfo" key={post.id}>
        <PostInfo
          user={post.user}
          body={post.body}
          title={post.title}
        />

        <hr />

        <CommentList comments={post.comments} />
      </div>
    ))}
  </div>
);
