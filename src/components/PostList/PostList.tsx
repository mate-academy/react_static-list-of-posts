import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  list: Post[];
};

export const PostList: React.FC<Props> = ({ list }) => (
  <ul className="PostList" data-cy="post-info">
    {list.map((post) => (
      <li key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          comment={post.comment}
        />
      </li>
    ))}
  </ul>
);
