import Post from "@/components/posts/editor/post";
import PostEditor from "@/components/posts/editor/post-editor";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/lib/types";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: postDataInclude,
  });

  return (
    <main className="flex min-w-0 w-full justify-center">
      <div className="min-w-0 w-full space-y-5">
        <PostEditor />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
