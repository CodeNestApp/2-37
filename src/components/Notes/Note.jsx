import { useState } from "react";
import { update } from "../../firebase/update";
import Button from "../UI/Button";
import NoteForm from "./NoteForm";

const Note = ({ id, title, content, onEdit }) => {
  const [visibleActions, setVisibleActions] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const mouseEnterHandler = () => {
    setVisibleActions(true);
  };

  const mouseLeaveHandler = () => {
    setVisibleActions(false);
  };

  const editClickHandler = () => {
    setEditMode(true);
  };

  const closeEditMode = () => {
    setEditMode(false);
  };

  const editNoteHandler = (note) => {
    update("notes", id, note).then(() => {
      onEdit({ ...note, id });
      closeEditMode();
    });
  };

  if (editMode) {
    return (
      <div className="mt-3">
        <NoteForm
          note={{ title, content }}
          actionName="Save"
          onCancel={closeEditMode}
          onSubmit={editNoteHandler}
        />
      </div>
    );
  }

  return (
    <div
      className="mt-5 transition-all duration-300"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      id={title}
    >
      <div className="flex justify-between items-center mb-3 h-6">
        <h2 className="font-bold">{title}</h2>
        {visibleActions ? (
          <Button
            extraClasses="text-xs w-1/12 bg-white"
            type="secondary"
            onClick={editClickHandler}
          >
            Edit
          </Button>
        ) : null}
      </div>
      <div
        className="border-l pl-2 whitespace-pre-wrap leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default Note;
