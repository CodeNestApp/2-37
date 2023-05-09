import NoteForm from "./NoteForm";
import Note from "./Note";

const Notes = ({ notes, onAdd, onEdit }) => {
  return (
    <div className="container mx-auto py-5">
      <div className="hidden bg-red-200"></div>
      {notes.map((note) => (
        <Note key={note.id} onEdit={onEdit} {...note} />
      ))}
      <div className="mt-10">
        <NoteForm onSubmit={onAdd} actionName="Add"></NoteForm>
      </div>
    </div>
  );
};

export default Notes;
