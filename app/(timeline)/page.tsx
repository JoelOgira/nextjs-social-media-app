import Post from "@/components/posts/editor/post";
import PostEditor from "@/components/posts/editor/post-editor";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/lib/types";

export default async function Timeline() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: postDataInclude,
  });

  return (
    <main className="flex w-full min-w-0 justify-center">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        <div className="flex flex-col space-y-3">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
