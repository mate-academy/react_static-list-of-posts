import User from './User';
import Comment from './Comment';

interface Post {
  userId: number,
  id: number,
  user: User | null,
  comment: Comment[],
  title: string,
  body: string
}

export default Post;
