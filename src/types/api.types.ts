export type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
};

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
  user: User | null
  comments: Comment[]
};

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
};
