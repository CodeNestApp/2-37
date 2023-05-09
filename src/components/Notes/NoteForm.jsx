import { useState } from "react";
import Wysiwyg from "../Shared/Wysiwyg";
import Button from "../UI/Button";

const NoteForm = ({ note: editedNote, onSubmit, actionName, onCancel }) => {
  const defaultNote = { title: "", content: "" };
  const [note, setNote] = useState(editedNote || defaultNote);

  const submitHandler = () => {
    onSubmit(note);
    setNote(defaultNote);
  };

  const titleChangeHandler = (e) => {
    setNote({ ...note, title: e.target.value });
  };

  const contentChangeHandler = (e) => {
    setNote({ ...note, content: e.target.innerText });
  };

  return (
    <div className="border p-3">
      <input
        type="text"
        placeholder="Title"
        className="w-full p-3 font-extrabold text-xl border-transparent outline-none"
        spellCheck={false}
        value={note.title}
        onChange={titleChangeHandler}
      />
      <Wysiwyg onKeyUp={contentChangeHandler} defaultContent={note.content} />
      <div className="flex justify-between items-center mt-2">
        {onCancel ? (
          <Button onClick={onCancel} type="secondary">
            Cancel
          </Button>
        ) : null}
        <Button
          onClick={submitHandler}
          extraClasses={onCancel ? "" : "ml-auto"}
        >
          {actionName}
        </Button>
      </div>
    </div>
  );
};

export default NoteForm;
