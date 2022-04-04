import React from 'react';
import { Post } from '../types';
import PostInfo from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: Post[],
};

const PostList: React.FC<Props> = ({ preparedPosts }) => {
  return (
    <div>
      {preparedPosts.map(e => <div key={e.id} className="postList"><PostInfo post={e} /></div>)}
    </div>
  );
};

export default PostList;
