import { useState } from "react";
import { add } from "../../firebase/add";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import TopicForm from "./TopicForm";

const AddTopic = ({ onAdd }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickHandler = () => setModalOpen(true);
  const modalCloseHandler = () => setModalOpen(false);

  const submitHandler = (data) => {
    add("topics", data).then((topic) => {
      onAdd(topic);
      modalCloseHandler();
    });
  };

  return (
    <>
      <Button onClick={onClickHandler} extraClasses="mx-auto">
        Add
      </Button>
      {modalOpen ? (
        <Modal title="Add Topic" onClose={modalCloseHandler}>
          <TopicForm
            onSubmit={submitHandler}
            onCancel={modalCloseHandler}
            actionName="Add"
          />
        </Modal>
      ) : null}
    </>
  );
};

export default AddTopic;
