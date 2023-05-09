import { useState } from "react";

const Sidebar = ({ title, subtitles }) => {
  const [collapsed, setCollapsed] = useState(false);

  const collapseClickHandler = () => setCollapsed(true);
  const expanseClickHandler = () => setCollapsed(false);

  const clickSubtitleHandler = (e) => {
    const element = document.getElementById(e.target.innerText);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    element.classList.add("bg-yellow-100");
    setTimeout(() => {
      element.classList.remove("bg-yellow-100");
    }, 1000);
  };

  return (
    <>
      {collapsed ? (
        <div
          className="fixed text-xs cursor-pointer sticky p-2 top-1 right-0"
          onClick={expanseClickHandler}
        >
          Expand
        </div>
      ) : (
        <aside className="h-screen sticky top-0 w-2/12 bg-indigo-500 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-700 scrollbar-track-slate-200">
          <p className="text-white text-2xl p-2">{title}</p>
          {subtitles.map((subtitle) => (
            <p
              key={subtitle}
              className="text-md cursor-pointer text-white w-full p-3 even:bg-indigo-600 hover:bg-white hover:text-indigo-700"
              onClick={clickSubtitleHandler}
            >
              {subtitle}
            </p>
          ))}
          <div
            className="text-xs cursor-pointer absolute text-white p-3 top-1 right-0"
            onClick={collapseClickHandler}
          >
            Collapse
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
