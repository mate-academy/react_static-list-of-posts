interface CommentItem {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

interface Post {
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Coment[],
}
