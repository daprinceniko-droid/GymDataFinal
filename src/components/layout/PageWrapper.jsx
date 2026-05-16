/**
 * PageWrapper Component - Wraps each page with layout structure
 * Adds proper padding for fixed navbar
 */
export const PageWrapper = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen pb-8 ${className}`}>
      {children}
    </div>
  );
};


