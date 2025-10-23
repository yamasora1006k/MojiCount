import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CharacterAnalysisProps {
  text: string;
}

export const CharacterAnalysis = ({ text }: CharacterAnalysisProps) => {
  const analyzeCharacters = () => {
    const kanji = text.match(/[\u4e00-\u9faf]/g)?.length || 0;
    const hiragana = text.match(/[\u3040-\u309f]/g)?.length || 0;
    const katakana = text.match(/[\u30a0-\u30ff]/g)?.length || 0;
    const alphanumeric = text.match(/[a-zA-Z0-9]/g)?.length || 0;
    const symbols = text.match(/[^\u4e00-\u9faf\u3040-\u309f\u30a0-\u30ffa-zA-Z0-9\s]/g)?.length || 0;
    const total = text.replace(/\s/g, "").length;

    return {
      kanji: { count: kanji, percentage: total ? (kanji / total) * 100 : 0 },
      hiragana: { count: hiragana, percentage: total ? (hiragana / total) * 100 : 0 },
      katakana: { count: katakana, percentage: total ? (katakana / total) * 100 : 0 },
      alphanumeric: { count: alphanumeric, percentage: total ? (alphanumeric / total) * 100 : 0 },
      symbols: { count: symbols, percentage: total ? (symbols / total) * 100 : 0 },
    };
  };

  const analysis = analyzeCharacters();

  const categories = [
    { name: "漢字", data: analysis.kanji, color: "from-primary to-primary-glow" },
    { name: "ひらがな", data: analysis.hiragana, color: "from-accent to-accent/70" },
    { name: "カタカナ", data: analysis.katakana, color: "from-purple-500 to-purple-400" },
    { name: "英数字", data: analysis.alphanumeric, color: "from-orange-500 to-orange-400" },
    { name: "記号", data: analysis.symbols, color: "from-pink-500 to-pink-400" },
  ];

  return (
    <Card className="border-2 p-6 shadow-soft">
      <h3 className="mb-4 text-lg font-semibold">文字種別分析</h3>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-foreground">{category.name}</span>
              <span className="text-muted-foreground">
                {category.data.count}文字 ({category.data.percentage.toFixed(1)}%)
              </span>
            </div>
            <div className="relative h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                style={{ width: `${category.data.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
