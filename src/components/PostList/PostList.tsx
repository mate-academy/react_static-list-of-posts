import React from 'react';
import './PostList.scss';
import PostInfo from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';

type PostArray = {
  postArray: Post[];
};

const PostList: React.FC<PostArray> = ({ postArray }) => (
  <ul className="postsList" data-cy="post-info">
    {postArray.map(post => {
      return (
        <>
          <li className="postItem" key={post.id}>
            <PostInfo {...post} />
          </li>
        </>
      );
    })}
  </ul>
);

export default PostList;
