import React from 'react';
import { Post } from '../../Types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

const PostList: React.FC<Props> = ({ posts }) => (
  <div className="cards">
    {posts.map(article => (
      <div key={article.id}>
        <PostInfo postInfo={article} />
      </div>
    ))}
  </div>
);

export default PostList;
