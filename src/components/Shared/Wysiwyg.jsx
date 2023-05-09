import { useRef, useState } from "react";
import Button from "../UI/Button";

const Wysiwyg = ({ onKeyUp, defaultContent }) => {
  const [mode, setMode] = useState(0);
  const contentRef = useRef();
  const [content, setContent] = useState(defaultContent || "Add Notes");

  const uglifyHandler = () => {
    setMode(0);
  };

  const beautifyHandler = () => {
    setContent(contentRef.current.innerText);
    setMode(1);
  };

  return (
    <>
      {mode === 0 ? (
        <div
          ref={contentRef}
          className="w-full outline-none p-2 border-x mb-5 whitespace-pre-wrap"
          spellCheck={false}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onKeyUp={onKeyUp}
        >
          {content}
        </div>
      ) : (
        <div
          className="w-full outline-none p-2 border-x mb-5 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
      <Button
        onClick={mode === 1 ? uglifyHandler : beautifyHandler}
        type="secondary"
        extraClasses="text-sm border-0 mb-1 ml-auto text-indigo-500"
      >
        {mode === 1 ? "Edit" : "Preview"}
      </Button>
    </>
  );
};

export default Wysiwyg;
