import { Suspense } from "react";
import SidebarNotes from "./SidebarNotes";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div>Loading notes...</div>}>
        <SidebarNotes />
      </Suspense>
      {children}
    </>
  );
}
