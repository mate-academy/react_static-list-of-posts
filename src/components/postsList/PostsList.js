import React from 'react';
import Post from '../post/Post';
import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';

const modifiedPosts = []; // Posts with User and CommentList

posts.forEach((post) => {
  const modifiedPost = { ...post };

  modifiedPost.user = { ...users.find(user => user.id === modifiedPost.userId) };
  modifiedPost.commentList = comments.filter(comment => comment.postId === modifiedPost.id);
  modifiedPosts.push(modifiedPost);
});

const PostsList = () => (
  <section>
    {modifiedPosts.map(post => <Post postText={post.body} postTitle={post.title} postComments={post.commentList} userName={post.user.name} />)}
  </section>
);

export default PostsList;
