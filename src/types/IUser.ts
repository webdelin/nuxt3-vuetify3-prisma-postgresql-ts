import { ISubscription } from "../types/ISubscription";
import { PostRequest } from "@/types/IPost";

export interface IUser {
  id?: number;
  username: string;
  name?: string;
  loginType?: string;
  password?: string;
  email?: string;
  role: string;
  avatarUrl?: string;
  subscription?: ISubscription | null;
  stripeCustomerId?: string | null;
  option?: string[];
  posts: PostRequest[];
}
