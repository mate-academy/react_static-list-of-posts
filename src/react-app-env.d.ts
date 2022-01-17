/// <reference types="react-scripts" />

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comment: Comments[];
}

interface User {
  name: string;
  email: string;
}

interface Comments {
  name: string;
  email: string;
  body: string;
}
