const Input = ({ name, type, classes, defaultValue }) => {
  return (
    <div className={classes}>
      <label
        className="block text-gray-700 text-sm font-bold mb-2 capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={`Enter ${name}`}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
