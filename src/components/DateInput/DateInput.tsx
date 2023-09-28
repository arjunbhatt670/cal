import DateInputProps from "./DateInput.type";

const DateInput: React.FC<DateInputProps> = (props) => {
  const { onChange, name, label, value } = props;

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className="block text-gray-600 text-sm font-medium"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className="mt-1 p-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
        type="date"
      />
    </div>
  );
};

export default DateInput;
