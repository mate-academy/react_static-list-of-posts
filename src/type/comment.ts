export interface Comment {
  postId: number;
  id:number;
  name: string;
  email: string;
  body:string;
}

export type CommentListType = {
  comments: Comment[];
};

export type CommentInfoType = {
  comment: Comment;
};
