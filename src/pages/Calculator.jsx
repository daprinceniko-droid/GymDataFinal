import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';
import { calculateUserMetrics, validateUserInput } from '../utils/calculations';
import { FrostedCard } from '../components/layout';
import { activityLevels, weightGoals } from '../data';
import { Wave } from '../components/Wave';
import { SiteFooter } from '../components/SiteFooter';

const ErrorMessage = ({ message }) => (
  message ? (
    <p className="text-red-300 text-xs font-semibold mt-1 flex items-center gap-1">
      <span>⚠️</span> {message}
    </p>
  ) : null
);

export default function Calculator() {
  const navigate = useNavigate();
  const { updateUserData, setCalculationResults } = useUserData();

  const [formData, setFormData] = useState({
    age: 22,
    height: 160,
    heightUnit: 'cm',
    weight: 58,
    weightUnit: 'kg',
    sex: 'female',
    activityLevel: 'moderate',
    weightGoal: 'lose',
  });

  const [errors, setErrors] = useState({});
  const [showActivityInfo, setShowActivityInfo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) : parseFloat(value),
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const toggleHeightUnit = () => {
    setFormData((prev) => {
      const newUnit = prev.heightUnit === 'cm' ? 'in' : 'cm';
      const newHeight =
        newUnit === 'cm'
          ? Math.round(prev.height * 2.54)
          : Math.round(prev.height / 2.54 * 10) / 10;
      return { ...prev, heightUnit: newUnit, height: newHeight };
    });
  };

  const toggleWeightUnit = () => {
    setFormData((prev) => {
      const newUnit = prev.weightUnit === 'kg' ? 'lbs' : 'kg';
      const newWeight =
        newUnit === 'kg'
          ? Math.round(prev.weight / 2.20462 * 10) / 10
          : Math.round(prev.weight * 2.20462);
      return { ...prev, weightUnit: newUnit, weight: newWeight };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    let heightCm = formData.height;
    let weightKg = formData.weight;

    if (formData.heightUnit === 'in') {
      heightCm = Math.round(formData.height * 2.54);
    }
    if (formData.weightUnit === 'lbs') {
      weightKg = Math.round(formData.weight / 2.20462 * 10) / 10;
    }

    const userData = {
      age: formData.age,
      height: heightCm,
      weight: weightKg,
      sex: formData.sex,
      activityLevel: formData.activityLevel,
      weightGoal: formData.weightGoal,
    };

    const validation = validateUserInput(userData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    updateUserData(userData);
    const results = calculateUserMetrics(userData);

    if (!results.success) {
      setErrors({ general: 'Unable to calculate. Please check your inputs.' });
      setIsSubmitting(false);
      return;
    }

    setCalculationResults(results);
    setIsSubmitting(false);
    navigate('/results-transition');
  };

  return (
    <div className="w-full overflow-hidden">
      {/* PINK HERO SECTION */}
      <div className="bg-pink-soft pt-20 pb-12 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-ink mb-2 font-display drop-shadow-lg">
            Tell Us About You
          </h1>
          <p className="text-pink-ink/90 text-sm md:text-base">
            Quick and easy – just a few details to get your personalized plan
          </p>
        </div>
      </div>

      {/* Wave transition */}
      <Wave from="pink" to="green" />

      {/* GREEN CONTENT SECTION */}
      <div className="bg-gradient-to-b from-green-soft to-green-deep px-4 py-12 pb-24">
        <div className="max-w-4xl mx-auto">
          {errors.general && (
            <div className="mb-6 p-3 bg-red-400/20 border-2 border-red-300 rounded-xl">
              <p className="text-red-200 font-semibold text-sm">{errors.general}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ROW 1: Basic Info (Age, Sex) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Age */}
              <FrostedCard variant="light" className="flex flex-col justify-between">
                <div>
                  <label htmlFor="age" className="block text-xs font-bold text-pink-ink mb-2 uppercase tracking-wide">
                    Age
                  </label>
                  <select
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    aria-label="Select your age"
                    aria-invalid={!!errors.age}
                    className={`w-full px-3 py-2 rounded-lg border-2 text-sm ${
                      errors.age
                        ? 'border-red-400 bg-red-400/10'
                        : 'border-pink-ink border-opacity-30 bg-pink-ink/10'
                    } focus:outline-none focus:ring-2 focus:ring-pink-300 transition font-medium text-pink-ink backdrop-blur-sm`}
                  >
                    {Array.from({ length: 106 }, (_, i) => 15 + i).map((age) => (
                      <option key={age} value={age}>
                        {age}
                      </option>
                    ))}
                  </select>
                  <ErrorMessage message={errors.age} />
                </div>
              </FrostedCard>

              {/* Sex */}
              <FrostedCard variant="light">
                <label className="block text-xs font-bold text-pink-ink mb-2 uppercase tracking-wide">
                  Sex
                </label>
                <div className="flex gap-2">
                  {['female', 'male'].map((sex) => (
                    <button
                      key={sex}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, sex }))}
                      aria-label={`Select ${sex}`}
                      aria-pressed={formData.sex === sex}
                      className={`flex-1 py-2 px-3 rounded-lg font-semibold text-sm transition focus:outline-none focus:ring-2 focus:ring-pink-300 capitalize ${
                        formData.sex === sex
                          ? 'bg-white text-pink-ink'
                          : 'bg-white/20 text-pink-ink hover:bg-white/30 border border-pink-ink border-opacity-30'
                      }`}
                    >
                      {sex}
                    </button>
                  ))}
                </div>
              </FrostedCard>
            </div>

            {/* ROW 2: Measurements (Height, Weight) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Height */}
              <FrostedCard variant="light">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="height" className="text-xs font-bold text-pink-ink uppercase tracking-wide">
                    Height
                  </label>
                  <button
                    type="button"
                    onClick={toggleHeightUnit}
                    aria-label={`Switch to ${formData.heightUnit === 'cm' ? 'inches' : 'centimeters'}`}
                    className="text-xs bg-pink-ink/30 text-pink-ink px-2 py-1 rounded-full hover:bg-pink-ink/50 focus:outline-none focus:ring-2 focus:ring-pink-300 transition font-bold"
                  >
                    {formData.heightUnit}
                  </button>
                </div>
                <input
                  id="height"
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  step={formData.heightUnit === 'cm' ? '1' : '0.1'}
                  aria-label={`Enter height`}
                  aria-invalid={!!errors.height}
                  className={`w-full px-3 py-2 rounded-lg border-2 text-sm ${
                    errors.height
                      ? 'border-red-400 bg-red-400/10'
                      : 'border-pink-ink border-opacity-30 bg-pink-ink/10'
                  } focus:outline-none focus:ring-2 focus:ring-pink-300 transition font-medium backdrop-blur-sm text-pink-ink`}
                />
                <ErrorMessage message={errors.height} />
              </FrostedCard>

              {/* Weight */}
              <FrostedCard variant="light">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="weight" className="text-xs font-bold text-pink-ink uppercase tracking-wide">
                    Weight
                  </label>
                  <button
                    type="button"
                    onClick={toggleWeightUnit}
                    aria-label={`Switch to ${formData.weightUnit === 'kg' ? 'pounds' : 'kilograms'}`}
                    className="text-xs bg-pink-ink/30 text-pink-ink px-2 py-1 rounded-full hover:bg-pink-ink/50 focus:outline-none focus:ring-2 focus:ring-pink-300 transition font-bold"
                  >
                    {formData.weightUnit}
                  </button>
                </div>
                <input
                  id="weight"
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  step={formData.weightUnit === 'kg' ? '0.1' : '1'}
                  aria-label={`Enter weight`}
                  aria-invalid={!!errors.weight}
                  className={`w-full px-3 py-2 rounded-lg border-2 text-sm ${
                    errors.weight
                      ? 'border-red-400 bg-red-400/10'
                      : 'border-pink-ink border-opacity-30 bg-pink-ink/10'
                  } focus:outline-none focus:ring-2 focus:ring-pink-300 transition font-medium backdrop-blur-sm text-pink-ink`}
                />
                <ErrorMessage message={errors.weight} />
              </FrostedCard>
            </div>

            {/* ROW 3: Activity Level */}
            <FrostedCard variant="light">
              <label className="block text-xs font-bold text-pink-ink mb-3 uppercase tracking-wide">
                Activity Level
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {Object.entries(activityLevels).map(([key, { label, description }]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, activityLevel: key }))}
                    onMouseEnter={() => setShowActivityInfo(key)}
                    onMouseLeave={() => setShowActivityInfo(null)}
                    aria-label={`${label}: ${description}`}
                    aria-pressed={formData.activityLevel === key}
                    className={`p-3 rounded-lg font-semibold text-sm transition focus:outline-none focus:ring-2 focus:ring-pink-300 relative ${
                      formData.activityLevel === key
                        ? 'bg-white text-pink-ink'
                        : 'bg-white/20 text-pink-ink hover:bg-white/30 border border-pink-ink border-opacity-30'
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span>{label}</span>
                      {showActivityInfo === key && (
                        <span className="text-xs mt-1 opacity-80">{description}</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </FrostedCard>

            {/* ROW 4: Weight Goal */}
            <FrostedCard variant="light">
              <label className="block text-xs font-bold text-pink-ink mb-3 uppercase tracking-wide">
                Weight Goal
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(weightGoals).map(([key, { label }]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, weightGoal: key }))
                    }
                    aria-label={`Goal: ${label}`}
                    aria-pressed={formData.weightGoal === key}
                    className={`py-3 px-2 rounded-lg font-bold text-sm transition focus:outline-none focus:ring-2 focus:ring-pink-300 ${
                      formData.weightGoal === key
                        ? 'bg-white text-pink-ink scale-105'
                        : 'bg-white/20 text-pink-ink hover:bg-white/30 border border-pink-ink border-opacity-30'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </FrostedCard>

            {/* SUBMIT BUTTON - Full Width, Prominent */}
            <button
              type="submit"
              disabled={isSubmitting}
              aria-label={isSubmitting ? 'Calculating...' : 'Calculate results'}
              className="w-full bg-gradient-to-r from-pink-200 to-pink-300 hover:from-pink-300 hover:to-pink-400 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-lg transition transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-300 mt-2"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block animate-spin">⚙️</span>
                  Calculating...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  🎯 Calculate My Results
                </span>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Wave at bottom */}
      <Wave from="green" to="pink" />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
