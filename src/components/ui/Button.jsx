/**
 * Button Component - Reusable button with variants
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-2xl transition transform hover:scale-105 active:scale-95 focus:outline-none';

  const variants = {
    primary: 'bg-pink-300 hover:bg-pink-400 text-white shadow-md-soft',
    secondary: 'bg-mint-300 hover:bg-mint-400 text-white shadow-md-soft',
    outline: 'border-2 border-pink-300 text-pink-300 hover:bg-pink-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

