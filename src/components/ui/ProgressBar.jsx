/**
 * ProgressBar Component - Visual progress indicator
 */
export const ProgressBar = ({
  value,
  max = 100,
  color = 'pink',
  label,
  showValue = true,
  className = '',
}) => {
  const percentage = (value / max) * 100;

  const colors = {
    pink: 'bg-pink-300',
    mint: 'bg-mint-300',
    green: 'bg-success',
    yellow: 'bg-warning',
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-semibold text-darkTeal">
            {label}
          </label>
          {showValue && (
            <span className="text-sm font-bold text-darkTeal">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-sm">
        <div
          className={`${colors[color]} h-full rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

