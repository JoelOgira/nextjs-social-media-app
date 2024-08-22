import PostEditor from "@/components/posts/editor/post-editor";

export default function Home() {
  return (
    <main className="flex min-w-0 w-full justify-center">
      <div className="min-w-0 w-full space-y-5">
        <PostEditor />
      </div>
    </main>
  );
}
