export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
};

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
};

export interface PreparedPosts {
  userId: number,
  id: number,
  title: string,
  body: string,
  comments: Comment[],
  user?: User,
}
