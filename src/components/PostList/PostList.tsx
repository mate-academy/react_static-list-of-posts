import React from 'react';

import { PostInfo } from '../PostInfo';
import { Data } from '../../types';

type Props = {
  posts: Array<Data>;
};

export const PostList: React.FC<Props> = ({ posts }) => {
  const listItems = posts.map(post => <PostInfo post={post} key={post.id} />);

  return (
    <ul className="PostList">
      {listItems}
    </ul>
  );
};
