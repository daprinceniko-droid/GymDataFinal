import { useState } from "react";
import { motion } from "framer-motion";
import { Chip } from "./Pill";
import { ScrollPicker } from "./ScrollPicker";
import type { Inputs, Activity, Goal, Gender } from "@/lib/calorie";

interface CalculatorFormProps {
  onCalculate: (inputs: Inputs) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [gender, setGender] = useState<Gender>("female");
  const [age, setAge] = useState(22);
  const [heightCm, setHeightCm] = useState(160);
  const [weightKg, setWeightKg] = useState(58);
  const [activity, setActivity] = useState<Activity>("moderate");
  const [goal, setGoal] = useState<Goal>("lose");

  const submit = () => {
    onCalculate({ gender, age, heightCm, weightKg, activity, goal });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto px-6 py-12 text-center"
    >
      {/* Stats row — alarm-clock style scroll wheels */}
      <h2 className="text-3xl mb-2 text-shadow-soft">Your Stats</h2>
      <p className="text-foreground/90 mb-6">
        Scroll the wheels (or tap a number) to set your stats
      </p>
      <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-10 place-items-center">
        <ScrollPicker label="Age" value={age} onChange={setAge} min={14} max={90} />
        <ScrollPicker
          label="Height"
          value={heightCm}
          onChange={setHeightCm}
          min={120}
          max={220}
          suffix="cm"
        />
        <ScrollPicker
          label="Weight"
          value={weightKg}
          onChange={setWeightKg}
          min={35}
          max={200}
          suffix="kg"
        />
      </div>

      {/* Gender */}
      <h2 className="text-3xl mb-2 text-shadow-soft">Gender</h2>
      <p className="text-foreground/90 mb-5">For the most accurate BMR calculation</p>
      <div className="flex justify-center gap-3 mb-10">
        <Chip active={gender === "female"} onClick={() => setGender("female")}>
          Female
        </Chip>
        <Chip active={gender === "male"} onClick={() => setGender("male")}>
          Male
        </Chip>
      </div>

      {/* Activity */}
      <h2 className="text-3xl mb-2 text-shadow-soft">Activity Level</h2>
      <p className="text-foreground/90 mb-5">
        Estimate your typical daily activity.
        <br className="hidden sm:block" /> This helps define your calories
      </p>
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        <Chip active={activity === "light"} onClick={() => setActivity("light")}>
          Light
        </Chip>
        <Chip active={activity === "moderate"} onClick={() => setActivity("moderate")}>
          Moderate
        </Chip>
        <Chip active={activity === "high"} onClick={() => setActivity("high")}>
          High
        </Chip>
      </div>

      {/* Goal */}
      <h2 className="text-3xl mb-2 text-shadow-soft">Weight Goal</h2>
      <p className="text-foreground/90 mb-5">Define your objective for the coming period</p>
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        <Chip active={goal === "lose"} onClick={() => setGoal("lose")}>
          Lose
        </Chip>
        <Chip active={goal === "maintain"} onClick={() => setGoal("maintain")}>
          Maintain
        </Chip>
        <Chip active={goal === "gain"} onClick={() => setGoal("gain")}>
          Gain
        </Chip>
      </div>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={submit}
        className="bg-gradient-pill shadow-pill text-foreground font-display text-3xl px-12 py-4 rounded-3xl"
      >
        Calculate
      </motion.button>
    </motion.div>
  );
}
