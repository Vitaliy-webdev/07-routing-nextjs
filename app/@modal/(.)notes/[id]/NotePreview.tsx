"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import type { Note } from "@/types/note";
import css from "./NotePreview.module.css";

export default function NotePreview({ id }: { id: string }) {
  const router = useRouter();
  const [note, setNote] = useState<Note | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNoteById(id)
      .then(setNote)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <div className={css.container}>Loading...</div>;
  if (error) return <div className={css.container}>Error: {error}</div>;
  if (!note) return <div className={css.container}>Note not found</div>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <span className={css.tag}>{note.tag}</span>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          {new Date(note.createdAt).toLocaleDateString()}
        </p>
        <button className={css.backBtn} onClick={() => router.back()}>
          ← Back
        </button>
      </div>
    </div>
  );
}
