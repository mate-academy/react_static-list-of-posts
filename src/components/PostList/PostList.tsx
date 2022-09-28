import React from 'react';
import { PostTodo } from '../../types/PostTodo';
import { PostInfo } from '../PostInfo';

type PostTodoType = {
  todoPost: PostTodo[],
};

export const PostList: React.FC<PostTodoType> = ({ todoPost }) => (
  <>
    <div className="PostList">
      {todoPost.map((postInfoProp) => (
        <PostInfo postInfoProp={postInfoProp} />
      ))}
    </div>
  </>
);
