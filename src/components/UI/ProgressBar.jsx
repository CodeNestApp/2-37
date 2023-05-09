const ProgressBar = ({ progress, large }) => {
  const classes = ["flex", large ? "h-8" : ""].join(" ");
  return (
    <div className={classes}>
      {progress > 0 ? (
        <div
          className="border border-purple-500 bg-purple-500"
          style={{ width: `${progress}%` }}
        ></div>
      ) : null}
      <div
        className="border border-slate-100 bg-slate-100"
        style={{ width: `${100 - progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
