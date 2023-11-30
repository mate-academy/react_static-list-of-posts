import { Comments } from './Comment';
import { User } from './User';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comments[]
}

export interface PostInfoProps {
  post: Post;
}

export interface PostListProps {
  posts: Post[];
}
