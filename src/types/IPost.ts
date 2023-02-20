export type PostRequest = {
  id: number;
  title: string;
  description?: string;
  comments?: CommentRequest[];
};

export type CommentRequest = {
  id: number;
  Post: string[];
  postId: number;
};
