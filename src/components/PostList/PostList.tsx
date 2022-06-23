import React from 'react';
import './PostList.scss';
import { PreparedPost } from '../../types/interfaces';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  postList: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="post-list">
    {postList.map(post => (
      <li key={post.id} className="post-list__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

export default PostList;
