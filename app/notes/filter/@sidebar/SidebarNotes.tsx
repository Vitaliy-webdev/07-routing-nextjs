"use client";
import { useRouter } from "next/navigation";
import css from "./SidebarNotes.module.css";

const TAGS = ["All", "Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function SidebarNotes() {
  const router = useRouter();

  return (
    <ul className={css.menuList}>
      {TAGS.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <button
            className={css.menuLink}
            onClick={() => router.push(`/notes/filter/${tag}`)}
          >
            {tag}
          </button>
        </li>
      ))}
    </ul>
  );
}
