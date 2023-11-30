export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentsProps {
  comments: Comment[];
}

export interface CommentProps {
  comment: Comment;
}
