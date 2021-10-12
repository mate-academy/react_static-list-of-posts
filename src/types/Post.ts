import User from './User';
import Comment from './Comment';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user?: User,
  comments: Comment[],
}

export default Post;
