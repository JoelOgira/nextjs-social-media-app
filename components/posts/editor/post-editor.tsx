"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import UserAvatar from "@/components/user-avatar";
import { useSession } from "@/providers/session-provider";
import React from "react";
import { Button } from "@/components/ui/button";
import { submitPost } from "./actions";
import "./styles.css";

export default function PostEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "Just threads ...",
      }),
    ],
    immediatelyRender: false,
  });

  const input = editor?.getText({ blockSeparator: "\n" }) || "";

  const { user } = useSession();

  const onSubmit = async () => {
    await submitPost(input);
    editor?.commands.clearContent();
  };

  return (
    <div className="flex flex-col gap-5 p-5 bg-card rounded-2xl shadow-sm">
      <div className="flex gap-3">
        <UserAvatar avatarUrl={user?.avatarUrl} size={40} />
        <EditorContent
          editor={editor}
          className="max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3 "
        />
      </div>

      <div className="flex justify-end">
        <Button
          className="min-w-20"
          disabled={!input.trim()}
          onClick={onSubmit}
        >
          Post
        </Button>
      </div>
    </div>
  );
}
