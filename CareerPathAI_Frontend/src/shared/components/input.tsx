type InputProps = {
  type?: string;
  placeholder?: string;
};

const Input = ({ type = "text", placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm 
      focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};

export default Input;