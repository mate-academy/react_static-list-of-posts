import React from 'react';
import { CommentInfo } from './CommentInfo';
import { UserInfo } from './UserInfo';
import { PostInfo } from './PostInfo';
import { Post } from './Types/PostTypes';

export const PostList: React.FC<{ postList: Post[] }> = ({ postList }) => (
  <>
    {postList.map(
      (post) =>
        post.user &&
         (
          <tr>
            <PostInfo title={post.title} body={post.body} />
            <UserInfo user={post.user} />
            <CommentInfo comments={post.comments} />
          </tr>
        ),
    )}
  </>
);
