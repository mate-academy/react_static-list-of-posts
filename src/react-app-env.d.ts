/// <reference types="react-scripts" />

interface User {
  id: number;
  name: string;
  email: string;
}

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comments[] | null;
}

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
