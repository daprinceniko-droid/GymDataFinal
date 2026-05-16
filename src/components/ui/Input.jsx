/**
 * Input Component - Text input field with optional label and unit
 */
export const Input = ({
  label,
  unit,
  error,
  className = '',
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: 'border-mint-300 bg-mint-50 focus:border-mint-400',
    danger: 'border-red-400 bg-red-50 focus:border-red-500',
  };

  const variantClass = error ? variants.danger : variants[variant];

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-darkTeal mb-2">
          {label}
        </label>
      )}
      <div className="flex gap-2">
        <input
          className={`flex-1 px-4 py-3 border-2 rounded-xl focus:outline-none transition ${variantClass} ${className}`}
          {...props}
        />
        {unit && (
          <div className="bg-mint-200 px-4 py-3 rounded-xl font-semibold text-darkTeal flex items-center">
            {unit}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

