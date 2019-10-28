import React from 'react';
import Post from '../post/Post';
import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';

const modifiedPosts = posts.map((post) => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  commentList: comments.filter(comment => comment.postId === post.id),
}));

const PostsList = () => (
  <section>
    {modifiedPosts.map(post => (
      <Post
        postText={post.body}
        postTitle={post.title}
        postComments={post.commentList}
        userName={post.user.name}
      />
    ))}
  </section>
);

export default PostsList;
