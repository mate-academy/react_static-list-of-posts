import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <div className="post">
    {preparedPosts.map(post => (
      <div key={post.id} className="post__body">
        <PostInfo post={post} />
      </div>
    ))}
  </div>
);
