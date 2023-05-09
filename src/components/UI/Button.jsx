const Button = ({ children, onClick, type, extraClasses, disabled }) => {
  const commonClasses =
    "font-bold text-center p-2 rounded cursor-pointer w-1/6";

  let customClasses = "bg-indigo-500 hover:bg-indigo-700 text-white";

  if (type === "secondary") {
    customClasses = "border border-slate-300 hover:border-slate-700";
  }

  return (
    <div
      onClick={onClick}
      className={[commonClasses, customClasses, extraClasses].join(" ")}
    >
      {children}
    </div>
  );
};

export default Button;
