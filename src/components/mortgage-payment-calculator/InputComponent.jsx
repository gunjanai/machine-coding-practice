function InputComponent({ name, value, onChange, warning }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="flex flex-col m-4 text-white">
      <label htmlFor={`input-${name}`}>{name}</label>
      <input
        className="border border-teal-600 p-2 mt-2 text-black"
        type="text"
        name={name}
        id={`input-${name}`}
        onChange={handleChange}
        value={value}
      />
      {warning && <p className="text-red-500 text-sm">{warning[name]}</p>}
    </div>
  );
}

export default InputComponent;
