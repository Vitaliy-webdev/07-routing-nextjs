import { Suspense } from "react";
import SidebarNotes from "./SidebarNotes";

export default function ProductsLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div>Loading notes...</div>}>
        <SidebarNotes />
      </Suspense>
      <div>
        {children}
        {modal}
      </div>
    </>
  );
}
