import Image from "next/image";
import signInImage from "../../assets/sign-in-image.webp";
import SignInForm from "./sign-in-form";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <main className="h-screen flex items-center justify-center p-5">
      <div className="flex overflow-hidden h-full max-h-[40rem] w-full max-w-[64rem] bg-card shadow-2xl rounded-2xl">
        <div className="overflow-y-auto p-10 w-full space-y-5 md:w-1/2 ">
          <h1 className="text-3xl text-center font-bold text-primary">
            Sign In to bugbook
          </h1>
          <div className="space-y-5">
            <SignInForm />

            <Link
              href="/signup"
              className="block text-center text-sm hover:underline"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </div>
        <Image
          src={signInImage}
          alt="Sign In Image"
          className="hidden italic object-cover w-1/2 md:block"
          placeholder="blur"
        />
      </div>
    </main>
  );
}
