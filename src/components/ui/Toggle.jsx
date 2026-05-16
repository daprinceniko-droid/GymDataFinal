/**
 * Toggle Component - Toggle between multiple options
 */
export const Toggle = ({
  options,
  value,
  onChange,
  variant = 'pink',
  className = '',
}) => {
  const variants = {
    pink: 'bg-pink-300 text-white',
    mint: 'bg-mint-300 text-white',
  };

  const selectedClass = variants[variant];
  const unselectedClass = 'bg-gray-100 text-darkTeal hover:bg-gray-200';

  return (
    <div className={`flex gap-3 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`flex-1 px-4 py-3 rounded-xl font-semibold transition transform ${
            value === option.value
              ? `${selectedClass} scale-105`
              : unselectedClass
          }`}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

