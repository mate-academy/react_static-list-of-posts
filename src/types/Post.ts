import { User } from '../types/User';
import { Comments } from '../types/Comment';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface PreparedPost extends Post {
  user: User | undefined;
  comments: Comments[];
}

export interface PostInfoProps {
  post: PreparedPost;
}

export interface PostListProps {
  posts: PreparedPost[];
}
