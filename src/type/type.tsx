export interface Comment {
  name: string,
  email: string,
  body: string,
  // eslint-disable-next-line react/no-unused-prop-types
  id: number
}

export interface User {
  name: string,
  email: string,
}

export interface Post {
  user: User,
  title: string,
  body: string,
  id: number,
  comments: Comment[],
}
