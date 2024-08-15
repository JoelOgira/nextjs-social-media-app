"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { signOut } from "./action";

export default function SignOutPage() {
  const router = useRouter();

  const handleSignOut = async () => {
    const result = await signOut();
    if (result.success) {
      router.push("/sign-in");
    } else {
      console.error("Sign out failed:", result.error);
    }
  };

  return (
    <main className="h-screen flex items-center justify-center p-5">
      <div className="flex flex-col rounded-2xl bg-card p-6 space-y-2 max-w-80 shadow-2xl">
        <h1 className="text-center font-bold text-3xl text-primary pb-4">
          bugbook
        </h1>
        <h2 className="font-medium text-lg">Sign out of bugbook?</h2>
        <p className="text-muted-foreground text-sm pb-4">
          You can always sign back in at any time and continue socializing with
          members of out community.
        </p>
        <Button className="rounded-full" onClick={handleSignOut}>
          Sign Out
        </Button>
        <Button
          variant="outline"
          className="rounded-full text-primary"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
      </div>
    </main>
  );
}
