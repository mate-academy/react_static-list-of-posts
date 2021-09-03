interface User {
  name: string;
  email: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
}

interface Post {
  user: User | null;
  comments: Comment[] | null;
  userId: number;
  id: number;
  title: string;
  body: string;
}
