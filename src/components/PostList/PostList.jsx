import React from 'react';
import { Post } from '../post/Post';
import { ProtoPost } from '../ProtoPost';

export const PostList = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(post => (
      <div className="post" key={post.id}>
        <Post post={post} />
      </div>
    ))}
  </>
);

PostList.propTypes = ProtoPost;
