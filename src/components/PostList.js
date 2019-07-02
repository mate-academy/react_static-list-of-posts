import React from 'react';

import posts from '../api/posts';
import comments from '../api/comments';
import users from '../api/users';
import Post from './Post';

const PostList = () => {
  const postsList = posts.map(post => ({
    ...post,
    comments: comments.filter(comment => comment.postId === post.id),
    user: users.find(user => user.id === post.userId),
  })).map(postData => <Post data={postData} />);

  return (<div className="post-list">{postsList}</div>);
};

export default PostList;
