import React, { Fragment } from 'react';
import { PostInfo } from '../PostInfo';
import { type Post } from '../../types/Post';
import './PostList.css';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <Fragment key={post.id}>
        <PostInfo post={post} />
      </Fragment>
    ))}
  </div>
);
