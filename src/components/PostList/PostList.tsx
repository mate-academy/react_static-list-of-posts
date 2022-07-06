import React from 'react';
import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <>
    {posts.map(post => (
      <div key={post.id}>
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
