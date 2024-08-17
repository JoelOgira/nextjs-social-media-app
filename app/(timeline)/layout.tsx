import Navbar from "./_components/navbar";
import MaxWidthWrapper from "@/app/(timeline)/_components/max-width-wrapper";
import { SessionProvider } from "@/providers/session-provider";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import MenuBar from "./_components/menu-bar";
import { SearchProvider } from "./_providers/search-context";

export default async function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/sign-in");

  return (
    <SessionProvider value={session}>
      <SearchProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <MaxWidthWrapper className="flex gap-5 grow py-5">
            <MenuBar className="hidden sticky bg-card top-[5.25rem] flex-none space-y-4 px-3 py-5 rounded-2xl shadow-sm sm:block lg:px-5 xl:w-80" />
            {children}
          </MaxWidthWrapper>
          <MenuBar className="sticky bottom-0 flex w-full gap-5 border-t p-3 bg-card justify-between sm:hidden" />
        </div>
      </SearchProvider>
    </SessionProvider>
  );
}
