import ReactDOM from "react-dom";

const Modal = ({ title, children, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed w-screen top-0 h-screen backdrop-blur-sm bg-white/30"
        onClick={onClose}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-1/2 border border-indigo-700 rounded p-3 shadow-xl">
        <div className="text-xl font-extrabold">{title}</div>
        <hr className="mt-3" />
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
