import React from 'react';
import { PostInfo } from '../PostInfo';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  return (
    <>
      {props.preparedPosts.map(post => {
        return (
          <ul key={post.id} className="list-group">
            <PostInfo post={post} />
          </ul>
        );
      })}
    </>
  );
};
