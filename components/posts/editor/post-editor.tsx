"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import UserAvatar from "@/components/user-avatar";
import { useSession } from "@/providers/session-provider";
import { Button } from "@/components/ui/button";

import "./styles.css";
import { useSubmitPostMutation } from "./mutations";
import { Loader2 } from "lucide-react";

export default function PostEditor() {
  const { user } = useSession();

  const mutation = useSubmitPostMutation();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "Threads could never.",
      }),
    ],
    immediatelyRender: false,
  });

  const input =
    editor?.getText({
      blockSeparator: "\n",
    }) || "";

  function onSubmit() {
    mutation.mutate(input, {
      onSuccess: () => {
        editor?.commands.clearContent();
      },
    });
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-3 shadow-sm md:p-5">
      <div className="flex gap-5">
        <UserAvatar
          avatarUrl={user.avatarUrl}
          size={40}
          className="hidden sm:inline"
        />
        <EditorContent
          editor={editor}
          className="max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3"
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={onSubmit}
          className="min-w-20 flex items-center"
          disabled={!input.trim()}
        >
          {mutation.isPending && (
            <Loader2 className="animate-spin size-5 mr-2" />
          )}
          Post
        </Button>
      </div>
    </div>
  );
}
