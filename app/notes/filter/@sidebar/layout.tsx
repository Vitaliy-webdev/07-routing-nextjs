import { Suspense } from "react";
import SidebarNotes from "./SidebarNotes";

export default function FilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <Suspense fallback={<div>Loading notes...</div>}>
        <SidebarNotes />
      </Suspense>
      <main>{children}</main>
    </div>
  );
}
