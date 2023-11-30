export interface Comments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface CommentListProps {
  comments: Comments[]
}

export interface CommentInfoProps {
  comment: Comments
}
