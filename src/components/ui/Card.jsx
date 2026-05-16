/**
 * Card Component - Container for grouped content
 */
export const Card = ({
  children,
  className = '',
  variant = 'default',
  interactive = false,
}) => {
  const variants = {
    default: 'bg-white bg-opacity-80 shadow-md-soft',
    primary: 'bg-gradient-to-br from-pink-100 to-pink-50 shadow-md-soft',
    secondary: 'bg-gradient-to-br from-mint-100 to-mint-50 shadow-md-soft',
  };

  const interactiveClass = interactive
    ? 'hover:shadow-lg-soft transition transform hover:scale-105 cursor-pointer'
    : '';

  return (
    <div
      className={`${variants[variant]} rounded-2xl p-6 ${interactiveClass} ${className}`}
    >
      {children}
    </div>
  );
};

