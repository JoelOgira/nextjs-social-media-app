"use client";

import UserAvatar from "@/components/user-avatar";
import { PostData } from "@/lib/types";
import { formatRelativeDate } from "@/lib/utils";
import { useSession } from "@/providers/session-provider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PostMoreButton from "./post-more-button";

interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  const { user } = useSession();

  return (
    <article className="group/post space-y-3 rounded-2xl bg-card p-3 shadow-sm cursor-pointer md:p-5">
      <div className="flex justify-between gap-3">
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
        {post.user.id === user.id && (
          <PostMoreButton
            post={post}
            className="opacity-0 transition-opacity group-hover/post:opacity-100"
          />
        )}
      </div>
      <div className="whitespace-pre-line break-words">{post.content}</div>
    </article>
  );
}