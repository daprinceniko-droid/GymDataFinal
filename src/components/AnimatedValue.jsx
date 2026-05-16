import { useAnimatedNumber } from '../hooks/useAnimation';

/**
 * AnimatedValue Component - Displays a number that animates from 0 to final value
 * Uses requestAnimationFrame for smooth 60fps animations
 */
export const AnimatedValue = ({
  value,
  duration = 1000,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const animatedValue = useAnimatedNumber(value, duration);

  return (
    <span className={className}>
      {prefix}{Math.round(animatedValue).toLocaleString()}{suffix}
    </span>
  );
};
