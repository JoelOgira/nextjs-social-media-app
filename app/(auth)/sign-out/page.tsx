"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { signOut } from "./action";
import { useQueryClient } from "@tanstack/react-query";

export default function SignOutPage() {
  const router = useRouter();

  const queryClient = useQueryClient();

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
      <div className="flex flex-col rounded-2xl bg-card p-4 space-y-2 max-w-96 shadow-2xl">
        <h1 className="text-center font-bold text-2xl text-primary pb-4 md:text-3xl">
          gumzo
        </h1>
        <h2 className="font-medium text-lg">Sign out of gumzo?</h2>
        <p className="text-muted-foreground pb-4">
          You can always sign back in at any time and continue socializing with
          members of our community.
        </p>
        <div className="flex flex-col space-y-3">
          <Button
            onClick={() => {
              queryClient.clear();
              handleSignOut();
            }}
          >
            Sign Out
          </Button>
          <Button
            variant="outline"
            className="text-primary"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </div>
      </div>
    </main>
  );
}
