import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../types/Post';
import './PostList.scss';

type Props = {
  content: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { content } = props;

  return (
    <ul>
      {content.map((post: Post) => (
        <li className="PostList" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
