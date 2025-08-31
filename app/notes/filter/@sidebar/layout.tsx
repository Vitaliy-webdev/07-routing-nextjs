import { Suspense } from "react";
import SidebarNotes from "./SidebarNotes";

export default function ProductsLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div>Loading notes...</div>}>
        <SidebarNotes />
      </Suspense>
      <Suspense fallback={<div>Loading notes...</div>}>{sidebar}</Suspense>
      {children}
    </>
  );
}
