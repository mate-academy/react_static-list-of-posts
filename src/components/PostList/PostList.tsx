import React from 'react';

import { CommentList } from '../CommentList';
import { PostInfo } from '../PostInfo';

// Types props
import { CommentInfoProps } from '../CommentInfo';
import { UserInfoProps } from '../UserInfo';

type Props = {
  user: UserInfoProps | undefined,
  title: string,
  body: string,
  id: number,
  comments: CommentInfoProps[],
};

interface PostListProps {
  postsArray: Props[]
}

export const PostList: React.FC<PostListProps> = ({ postsArray }) => (
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
