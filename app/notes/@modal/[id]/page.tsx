import NotePreview from "./NotePreview";

export default function ModalPage({ params }: { params: { id: string } }) {
  return <NotePreview id={params.id} />;
}
