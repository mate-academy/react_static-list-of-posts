import React from 'react';
import { PostInfo } from './PostInfo';
import '../App.scss';

type Props = {
  post: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { post } = props;

  return (
    <ul className="list">
      {post.map(postlist => (
        <li className="hello">
          <PostInfo post={postlist} />
        </li>
      ))}
    </ul>
  );
};
