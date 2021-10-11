interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface User {
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comments[];
}
