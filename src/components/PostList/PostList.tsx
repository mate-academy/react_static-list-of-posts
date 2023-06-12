import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import { PostInfo } from '../PostInfo/PostInfo';
import { Posts } from '../../types/Posts';
import { Comments } from '../../types/Comments';
import { Users } from '../../types/Users';

type Props = {
  posts: Posts[];
  users: Users[];
  comments: Comments[];
};

export const PostList: React.FC<Props> = ({ posts, comments, users }) => (
  <div className="PostList">
    {
      posts.map(post => (
        <PostInfo
          post={post}
          key={post.id}
          users={
            <UserInfo {...users[post.userId]} />
          }
          comments={
            <CommentList {...comments[post.userId]} />
          }
        />
      ))
    }
  </div>
);
