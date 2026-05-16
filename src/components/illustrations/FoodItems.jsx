/**
 * FoodItems Component - Illustrated food items
 * Used to show visual representation of food equivalents
 */
export const FoodItems = ({ items = [], className = '' }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`food-items flex flex-wrap gap-4 justify-center ${className}`}>
      {items.map((item, idx) => (
        <div key={idx} className="text-center">
          <div className="text-5xl mb-2">{item.icon}</div>
          {item.quantity && item.quantity > 1 && (
            <div className="text-xs font-bold text-darkTeal text-opacity-60">
              × {item.quantity}
            </div>
          )}
          {item.name && (
            <p className="text-xs font-semibold text-darkTeal">{item.name}</p>
          )}
        </div>
      ))}
    </div>
  );
};

