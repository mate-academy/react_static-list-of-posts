import { Post } from '../types/Post';
import { User } from '../types/User';
import { Comment } from '../types/Comment';
import { FullPost } from '../types/FullPost';

interface PreparePostsArgs {
  posts: Post[];
  users: User[];
  comments: Comment[];
}

const getUserById = (users: User[], id: number): User | undefined => (
  users.find(user => user.id === id)
);

const getCommentsByPostId = (
  comments: Comment[],
  postId: number,
): Comment[] => (
  comments.filter(comment => comment.postId === postId)
);

export const preparePosts = (args: PreparePostsArgs): FullPost[] => {
  const { posts, users, comments } = args;

  return posts.map((post) => {
    const foundUser = getUserById(users, post.userId);
    const FoundComments = getCommentsByPostId(comments, post.id);

    return {
      ...post,
      user: foundUser,
      comments: FoundComments,
    };
  });
};
