"use client";

import MaxWidthWrapper from "@/app/(timeline)/_components/max-width-wrapper";
import Link from "next/link";
import SearchField from "./search-field";
import UserButton from "@/components/user-button";
import { cn } from "@/lib/utils";
import { useSearchContext } from "../_providers/search-provider";

export default function Navbar() {
  const { isMobile, showSearch } = useSearchContext();

  return (
    <header className="sticky inset-x-0 top-0 z-[40] w-full bg-card py-3 backdrop-blur-lg transition-all">
      {isMobile ? (
        <MaxWidthWrapper
          className={cn(
            "flex flex-col items-center",
            showSearch && "space-y-2"
          )}
        >
          <div className="flex w-full items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-primary sm:text-2xl"
            >
              gumzo
            </Link>
            <UserButton />
          </div>

          {showSearch && (
            <div className="w-full">
              <SearchField />
            </div>
          )}
        </MaxWidthWrapper>
      ) : (
        <MaxWidthWrapper className="flex flex-wrap items-center justify-between gap-2">
          <Link href="/" className="text-lg font-bold text-primary sm:text-2xl">
            gumzo
          </Link>
          <SearchField />
          <UserButton />
        </MaxWidthWrapper>
      )}
    </header>
  );
}
