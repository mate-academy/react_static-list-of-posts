import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/post';

type Props = {
  postLists: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { postLists } = props;

  return (
    <>
        <div className="PostList">
        {postLists.map(
          post => <PostInfo key={post.id} postInfo={post} />)}
        </div>
    </>
  );
};
