import prisma from "../client";
import { Post } from "@prisma/client";

export async function getTopics(): Promise<Post[]> {
  return prisma.post.findMany();
}
