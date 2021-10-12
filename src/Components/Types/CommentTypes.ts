export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  export type CommentInfoProps = {
    comments: Comment[];
  }