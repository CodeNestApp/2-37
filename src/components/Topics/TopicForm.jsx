import { useRef, useState } from "react";
import Loading from "../Shared/Loading";
import Button from "../UI/Button";
import Input from "../UI/Form/Input";

const TopicForm = ({ onSubmit, onCancel, actionName, topic }) => {
  // TODO Add Validation
  const [submitting, setSubmitting] = useState(false);

  const formRef = useRef();

  const onSubmitHandler = () => {
    const {
      title: { value: title },
      status: { value: status },
      progress: { value: progress },
    } = formRef.current;

    setSubmitting(true);
    onSubmit({ title, status, progress: +progress });
  };

  if (submitting) {
    return (
      <div className="text-center text-xl p-3">
        Topic is being added <Loading />
      </div>
    );
  }

  return (
    <>
      <form className="px-8 pt-6 pb-8" ref={formRef}>
        <Input
          type="text"
          name="title"
          classes="mb-4"
          defaultValue={topic?.title || ""}
        />
        <Input
          type="text"
          name="status"
          classes="mb-4"
          defaultValue={topic?.status || "To do"}
        />
        <Input
          type="number"
          name="progress"
          defaultValue={topic?.progress || "0"}
        />
      </form>
      <hr className="mt-3" />
      <div className="flex mt-3 justify-between">
        <Button onClick={onCancel} type="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmitHandler}>{actionName}</Button>
      </div>
    </>
  );
};

export default TopicForm;
