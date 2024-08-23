import { Prisma } from "@prisma/client";

export const postDataInclude = {
  user: {
    select: {
      avatarUrl: true,
      bio: true,
      displayName: true,
      username: true,
    },
  },
} satisfies Prisma.PostInclude;

export type PostData = Prisma.PostGetPayload<{
  include: typeof postDataInclude;
}>;
