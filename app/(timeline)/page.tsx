import PostEditor from "@/components/posts/editor/post-editor";
import TrendsSidebar from "../../components/trend-sidebar";
import ForYouFeed from "./_components/for-you-feed";

export default function Timeline() {
  return (
    <main className="flex w-full min-w-0 justify-center gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />

        <ForYouFeed />
      </div>

      <TrendsSidebar />
    </main>
  );
}
