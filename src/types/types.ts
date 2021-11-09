export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PreparedPost = Post & {
  user: User | null;
  comments: Comment[];
};
