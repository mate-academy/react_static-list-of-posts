import React from 'react';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts:Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { preparedPosts } = props;

  return (
    <ul className="postList">
      {
        preparedPosts.map(post => {
          return (
            <li>
              <PostInfo key={post.id} post={post} />
            </li>
          );
        })
      }
    </ul>
  );
};
