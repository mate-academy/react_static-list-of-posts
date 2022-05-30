import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPost } from '../../react-app-env';

type Props = {
  preparedPosts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <>
    <div className="postList">
      {preparedPosts.map(post => (
        <div key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  </>
);
