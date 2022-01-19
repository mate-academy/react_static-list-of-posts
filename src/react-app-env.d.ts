interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: CommentItem[],
}

interface User {
  id: number,
  name: string,
  email: string,
}

interface CommentItem {
  postId: number,
  id: number,
  name: string,
  body: string,
  email: string,
}
