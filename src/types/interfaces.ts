export interface User {
  name: string;
  email: string;
}

export interface Comment {
  id: number;
  name: string;
  body: string;
  email: string;
}

export interface PreparedPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[] | null;
}
