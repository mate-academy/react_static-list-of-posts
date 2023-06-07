import { Post } from '../types/Post';
import { User } from '../types/User';
import { Comment } from '../types/Comment';
import { FullPost } from '../types/FullPost';

interface PreparePostsArgs {
  posts: Post[];
  users: User[];
  comments: Comment[];
}

export const preparePosts = (args: PreparePostsArgs): FullPost[] => {
  const { posts, users, comments } = args;

  return posts.map((post) => {
    const foundUser = users.find((user) => (
      post.userId === user.id
    ));
    const FoundComments = comments.filter(comment => (
      comment.postId === post.id
    ));

    return {
      ...post,
      user: foundUser,
      comments: FoundComments,
    };
  });
};
