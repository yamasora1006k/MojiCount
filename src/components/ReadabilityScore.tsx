import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface ReadabilityScoreProps {
  text: string;
}

export const ReadabilityScore = ({ text }: ReadabilityScoreProps) => {
  const calculateReadability = () => {
    if (!text.trim()) return { score: 0, level: "未入力", color: "text-muted-foreground" };

    const sentences = text.split(/[。！？\n]/).filter((s) => s.trim().length > 0);
    const avgSentenceLength = sentences.length > 0 ? text.length / sentences.length : 0;
    
    const kanji = text.match(/[\u4e00-\u9faf]/g)?.length || 0;
    const total = text.replace(/\s/g, "").length;
    const kanjiRatio = total > 0 ? kanji / total : 0;

    // スコア計算（0-100）
    let score = 100;
    
    // 文が長すぎると減点
    if (avgSentenceLength > 60) score -= 20;
    else if (avgSentenceLength > 40) score -= 10;
    
    // 漢字が多すぎると減点
    if (kanjiRatio > 0.4) score -= 20;
    else if (kanjiRatio > 0.3) score -= 10;
    
    // 漢字が少なすぎても減点
    if (kanjiRatio < 0.15 && total > 50) score -= 15;
    
    score = Math.max(0, Math.min(100, score));

    let level = "";
    let color = "";
    
    if (score >= 80) {
      level = "とても読みやすい";
      color = "text-green-600";
    } else if (score >= 60) {
      level = "読みやすい";
      color = "text-blue-600";
    } else if (score >= 40) {
      level = "普通";
      color = "text-yellow-600";
    } else {
      level = "やや難しい";
      color = "text-orange-600";
    }

    return { score: Math.round(score), level, color };
  };

  const { score, level, color } = calculateReadability();

  return (
    <Card className="border-2 p-6 shadow-soft">
      <div className="mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">読みやすさ</h3>
      </div>
      
      <div className="space-y-3">
        <div className="text-center">
          <div className={`text-5xl font-bold ${color}`}>
            {score}
          </div>
          <p className={`mt-2 text-lg font-medium ${color}`}>
            {level}
          </p>
        </div>
        
        <div className="relative h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className={`h-full transition-all duration-500 ${
              score >= 80
                ? "bg-gradient-to-r from-green-500 to-green-400"
                : score >= 60
                ? "bg-gradient-to-r from-blue-500 to-blue-400"
                : score >= 40
                ? "bg-gradient-to-r from-yellow-500 to-yellow-400"
                : "bg-gradient-to-r from-orange-500 to-orange-400"
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
        
        <div className="mt-4 space-y-1 text-xs text-muted-foreground">
          <p>• 適度な文の長さ</p>
          <p>• バランスの良い漢字使用</p>
          <p>• 文章の構成</p>
        </div>
      </div>
    </Card>
  );
};
