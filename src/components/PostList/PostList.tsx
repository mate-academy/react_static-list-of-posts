import React from 'react';
import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/Posts';

interface Props {
  posts: Posts[];
}
export const PostList: React.FC<Props> = (props) => {
  return (
    <>
      {props.posts.map((post) => (
        <div className="PostList" key={post.id}>
          <PostInfo posts={post} />
        </div>
      ))}
    </>
  );
};
