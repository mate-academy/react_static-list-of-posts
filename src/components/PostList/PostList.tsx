import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Props {
  posts: PreparedPosts[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => (
      <React.Fragment key={post.id}>
        <PostInfo post={post} />
      </React.Fragment>
    ))}
  </>
);
