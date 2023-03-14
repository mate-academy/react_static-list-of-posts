import { Comment } from './comment';
import { Post } from './post';
import { User } from './user';

export interface FullPostInfo extends Post {
  user?: User,
  comments: Comment[],
}

function getCommentsByPostId(comments: Comment[], postId: number): Comment[] {
  return comments.filter(comment => comment.postId === postId);
}

function getUserById(users: User[], id: number): User | undefined {
  return users.find(user => user.id === id);
}

export function getPosts(
  posts: Post[],
  comments: Comment[],
  users: User[],
): FullPostInfo[] {
  return posts.map(post => ({
    ...post,
    user: getUserById(users, post.userId),
    comments: getCommentsByPostId(comments, post.id),
  }));
}
