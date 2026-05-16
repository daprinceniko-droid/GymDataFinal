import { useRef } from 'react';
import { useInView } from '../../hooks';

/**
 * ScrollSection Component - Section that triggers animations on scroll
 * Used for scroll-triggered reveals and animations
 */
export const ScrollSection = ({
  children,
  className = '',
  variant = 'default',
  onViewChange,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    default: '',
    reveal: 'opacity-0 group-hover:opacity-100 transition-opacity',
  };

  return (
    <section
      ref={ref}
      className={`
        ${variants[variant]}
        ${isInView ? 'animate-fadeIn' : ''}
        ${className}
      `}
    >
      {children}
    </section>
  );
};

