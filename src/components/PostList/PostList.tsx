import React from 'react';
import { PreparedPosts } from '../../type/type';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Props {
  postList: PreparedPosts[]
}

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="post-list">
    {postList.map(
      (post) => <PostInfo key={post.id} postInfo={post} />,
    )}
  </ul>
);
