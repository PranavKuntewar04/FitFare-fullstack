const TextField = ({ 
  label, 
  id, 
  type = 'text', 
  placeholder, 
  value, 
  onChange 
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
};

export default TextField;