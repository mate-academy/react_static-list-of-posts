import React from 'react';
import { Post } from '../Post';
import { PostListShape } from '../propTypes/post';

export const PostList = ({ postlist }) => (
  <>
    {
      postlist.map(post => (
        <ul className="postList" key={post.id}>
          <Post {...post} />
        </ul>
      ))
    }
  </>
);

PostList.propTypes = PostListShape;
