import React from 'react';
import { Post } from '../Post';
import { postPropType } from '../propTypes/post';

export const PostList = ({ postlist }) => (
  <>
    {
      postlist.map(post => (
        <Post {...post} key={post.id} />
      ))
    }
  </>
);

PostList.propTypes = postPropType;
