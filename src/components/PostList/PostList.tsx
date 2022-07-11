import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../types/Post';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => (
      <div>
        <PostInfo
          body={post.body}
          id={post.id}
          title={post.title}
          user={post.user}
          comments={post.comments}
        />
      </div>
    ))}
  </>
);
