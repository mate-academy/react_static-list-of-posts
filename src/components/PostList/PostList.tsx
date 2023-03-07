import React from 'react';
import { PostListType } from '../../Types/Types';
import { PostInfo } from '../PostInfo';
import { CommentList } from '../CommentList';

export const PostList: React.FC<PostListType> = ({
  posts,
  users,
  comments,
}) => (
  <>
    {posts.map(post => (
      <li className="PostInfo" key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
          userId={post.userId}
          users={users}
        />

        <CommentList comments={comments} id={post.id} />
      </li>
    ))}
  </>
);
