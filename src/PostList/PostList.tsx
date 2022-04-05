import React from 'react';
import { Post } from '../types';
import PostInfo from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: Post[],
};

const PostList: React.FC<Props> = ({ preparedPosts }) => {
  return (
    <ul>
      {preparedPosts.map(post => <li key={post.id} className="postList"><PostInfo post={post} /></li>)}
    </ul>
  );
};

export default PostList;
