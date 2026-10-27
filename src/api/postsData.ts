import users from './users';
import rawPosts from '../api/posts';
import comments from '../api/comments';
import type { Comment } from '../types/comment';
import { Post } from '../types/post';
import { User } from '../types/user';

export const posts: Post[] = rawPosts.map(post => ({
  ...post,
  user: users.find((user: User) => user.id === post.userId),
  comments: comments.filter((comment: Comment) => comment.postId === post.id),
}));
