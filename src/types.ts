export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
}

export interface Comment {
  id: number,
  postId: number,
  name: string,
  email: string,
  body: string,
}

export interface PreparedPost extends Post {
  user?: User;
  comments: Comment[];
}
