import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign out",
};

export default function SignOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
