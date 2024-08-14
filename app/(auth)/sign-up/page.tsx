import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import signUpImage from "../../assets/sign-up-image.webp";
import SignUpForm from "./sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <main className="flex justify-center items-center h-screen p-5">
      <div className="flex h-full max-h-[44rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold text-primary">
              Sign Up to bugbook
            </h1>
            <p className="text-muted-foreground">
              A place where even{" "}
              <span className="italic text-primary">you</span> can make a
              friend.
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />

            <Link href="/sign-in" className="block text-center hover:underline">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
        <Image
          src={signUpImage}
          alt="Sign Up Image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
