"use server";

import { lucia, validateRequest } from "@/auth";
import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export async function signOut() {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return { success: true };
  // return redirect("/sign-in");
}