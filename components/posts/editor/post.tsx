"use client";

import UserAvatar from "@/components/user-avatar";
import { PostData } from "@/lib/types";
import { formatRelativeDate } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  return (
    <article
      onClick={() => router.push(`/posts/${post.id}`)}
      className="space-y-3 rounded-2xl bg-card p-3 shadow-sm cursor-pointer md:p-5"
    >
      <div className="flex flex-wrap gap-3">
        <Link href={`/users/${post.user.username}`}>
          <UserAvatar avatarUrl={post.user.avatarUrl} size={40} />
        </Link>
        <div>
          <Link
            href={`/users/${post.user.username}`}
            className="block font-medium hover:underline"
          >
            {post.user.displayName}
          </Link>
          <Link
            href={`/posts/${post.id}`}
            className="block text-sm text-muted-foreground hover:underline"
          >
            {formatRelativeDate(post.createdAt)}
          </Link>
        </div>
      </div>
      <div className="whitespace-pre-line break-words">{post.content}</div>
    </article>
  );
}
