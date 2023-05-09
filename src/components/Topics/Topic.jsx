import { useState } from "react";
import { useParams } from "react-router-dom";
import { add } from "../../firebase/add";
import { update } from "../../firebase/update";
import useFetch from "../../hooks/useFetch";
import Notes from "../Notes/Notes";
import Loading from "../Shared/Loading";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import ProgressBar from "../UI/ProgressBar";
import Sidebar from "./Sidebar";
import TopicForm from "./TopicForm";

const Topic = () => {
  const { id } = useParams();
  const {
    loading: loadingTopic,
    data: topic,
    setData: setTopic,
  } = useFetch("topics", { id });
  const {
    loading: loadingNotes,
    data: notes,
    setData: setNotes,
  } = useFetch("notes", { where: { field: "topicId", value: id } });
  const [modalOpen, setModalOpen] = useState(false);

  const onClickHandler = () => setModalOpen(true);
  const modalCloseHandler = () => setModalOpen(false);

  const submitHandler = (data) => {
    update("topics", id, data).then(() => {
      setTopic(data);
      modalCloseHandler();
    });
  };

  if (loadingTopic || loadingNotes) {
    return <Loading />;
  }

  const sortedNotes = notes.sort((a, b) => {
    return a.order < b.order ? -1 : 1;
  });

  const addNoteHandler = (note) => {
    const newNote = {
      ...note,
      topicId: id,
      order: notes.length + 1,
    };
    add("notes", newNote).then((addedNote) => {
      setNotes([...notes, addedNote]);
    });
  };

  const editNoteHandler = (editedNote) => {
    const newNotes = notes.map((note) => {
      if (editedNote.id === note.id) return editedNote;

      return note;
    });

    setNotes(newNotes);
  };

  return (
    <div className="flex">
      <Sidebar
        title={topic.title}
        subtitles={notes.map((note) => note.title)}
      />

      <main className="p-5 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-5xl text-center">{topic.title}</h1>
          <Button onClick={onClickHandler}>Edit</Button>
        </div>
        {modalOpen ? (
          <Modal title="Edit Topic" onClose={modalCloseHandler}>
            <TopicForm
              onSubmit={submitHandler}
              onCancel={modalCloseHandler}
              actionName="Save"
              topic={topic}
            />
          </Modal>
        ) : null}
        <div className="mt-5">
          <ProgressBar progress={topic.progress} large={true} />
        </div>
        <Notes
          notes={sortedNotes}
          onAdd={addNoteHandler}
          onEdit={editNoteHandler}
        />
      </main>
    </div>
  );
};

export default Topic;
