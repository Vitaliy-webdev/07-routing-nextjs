import { Suspense } from "react";
import SidebarNotes from "./SidebarNotes";

function ProductsLayout({
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

const layout = {
  Component: ProductsLayout,
  sidebar: <SidebarNotes />,
};

export default layout;
