import { Post } from './types/post';
import { Comment } from './types/comment';
import { User } from './types/user';
import { FullPostInfo } from './types/FullPostInfo';

interface PreparePostsArgs {
  posts: Post[];
  comments: Comment[];
  users: User[];
}

export const preparePosts = (
  args: PreparePostsArgs,
): FullPostInfo[] => {
  const { posts, comments, users } = args;

  return posts.map(post => {
    const user = users.find(owner => owner.id === post.userId);
    const userComments = comments
      .filter(comment => (
        comment.postId === post.id
      ));

    if (!user) {
      throw new Error('No user found');
    }

    return {
      ...post,
      user,
      comments: userComments,
    };
  });
};
