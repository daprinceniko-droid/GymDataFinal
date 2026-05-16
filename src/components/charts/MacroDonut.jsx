import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * MacroDonut Component - Displays macro distribution as an interactive donut chart
 * Shows protein, carbs, and fats percentages with calorie breakdown
 */
export const MacroDonut = ({ macroData, totalCalories }) => {
  if (!macroData || !totalCalories) return null;

  // Calculate percentages from calorie values
  const total = macroData.proteinCals + macroData.carbsCals + macroData.fatsCals;
  const data = [
    {
      name: 'Protein',
      value: Math.round((macroData.proteinCals / total) * 100),
      calories: Math.round(macroData.proteinCals),
      color: '#F8D7DA' // pink
    },
    {
      name: 'Carbs',
      value: Math.round((macroData.carbsCals / total) * 100),
      calories: Math.round(macroData.carbsCals),
      color: '#A8E6CF' // mint
    },
    {
      name: 'Fats',
      value: Math.round((macroData.fatsCals / total) * 100),
      calories: Math.round(macroData.fatsCals),
      color: '#88D8B0' // darker mint
    }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-white/20">
          <p className="font-semibold text-darkTeal">{payload[0].name}</p>
          <p className="text-sm text-pink-400">{payload[0].value}%</p>
          <p className="text-xs text-gray-600">{payload[0].payload.calories} kcal</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-80 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            animationDuration={800}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value, entry) => `${value} ${entry.payload.value}%`}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
