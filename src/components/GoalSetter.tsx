import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Target } from "lucide-react";

interface GoalSetterProps {
  text: string;
  goal: number;
  setGoal: (goal: number) => void;
}

export const GoalSetter = ({ text, goal, setGoal }: GoalSetterProps) => {
  const currentCount = text.length;
  const percentage = goal > 0 ? Math.min((currentCount / goal) * 100, 100) : 0;
  const isComplete = currentCount >= goal && goal > 0;

  return (
    <Card className="border-2 p-6 shadow-soft">
      <div className="mb-4 flex items-center gap-2">
        <Target className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">目標文字数</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="goal" className="text-sm font-medium">
            目標設定
          </Label>
          <Input
            id="goal"
            type="number"
            min="0"
            value={goal || ""}
            onChange={(e) => setGoal(Number(e.target.value))}
            placeholder="目標文字数を入力"
            className="mt-2"
          />
        </div>

        {goal > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">進捗状況</span>
              <span className={`font-bold ${isComplete ? "text-green-600" : "text-primary"}`}>
                {currentCount.toLocaleString()} / {goal.toLocaleString()} ({percentage.toFixed(1)}%)
              </span>
            </div>
            <div className="relative h-3 overflow-hidden rounded-full bg-secondary">
              <div
                className={`h-full transition-all duration-500 ${
                  isComplete
                    ? "bg-gradient-to-r from-green-500 to-green-400"
                    : "bg-gradient-to-r from-primary to-accent"
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
            {isComplete && (
              <p className="text-center text-sm font-medium text-green-600">
                🎉 目標達成おめでとうございます！
              </p>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
