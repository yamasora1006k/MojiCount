import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Trash2, Download } from "lucide-react";
import { toast } from "sonner";
import { CharacterAnalysis } from "@/components/CharacterAnalysis";
import { SocialMediaChecker } from "@/components/SocialMediaChecker";
import { GoalSetter } from "@/components/GoalSetter";
import { ReadabilityScore } from "@/components/ReadabilityScore";
import { TextHistory } from "@/components/TextHistory";
import { AdSpace } from "@/components/AdSpace";

interface HistoryItem {
  id: string;
  text: string;
  timestamp: number;
}

const Index = () => {
  const [text, setText] = useState("");
  const [goal, setGoal] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Load history and goal from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem("textHistory");
    const savedGoal = localStorage.getItem("textGoal");
    
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
    
    if (savedGoal) {
      setGoal(Number(savedGoal));
    }
  }, []);

  // Save to history when text changes (with debounce)
  useEffect(() => {
    if (!text.trim()) return;

    const timeoutId = setTimeout(() => {
      const newHistoryItem: HistoryItem = {
        id: Date.now().toString(),
        text: text,
        timestamp: Date.now(),
      };

      const updatedHistory = [newHistoryItem, ...history.filter(item => item.text !== text)]
        .slice(0, 10); // Keep only last 10 items

      setHistory(updatedHistory);
      localStorage.setItem("textHistory", JSON.stringify(updatedHistory));
    }, 2000); // Save after 2 seconds of no typing

    return () => clearTimeout(timeoutId);
  }, [text]);

  // Save goal to localStorage
  useEffect(() => {
    localStorage.setItem("textGoal", goal.toString());
  }, [goal]);

  const stats = {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, "").length,
    lines: text.split("\n").length,
    bytes: new Blob([text]).size,
  };

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    toast.success("テキストをコピーしました");
  }, [text]);

  const handleClear = useCallback(() => {
    setText("");
    toast.success("テキストをクリアしました");
  }, []);

  const handleDownload = useCallback(() => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `text_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("ファイルをダウンロードしました");
  }, [text]);

  const handleRestoreFromHistory = useCallback((historicText: string) => {
    setText(historicText);
    toast.success("履歴から復元しました");
  }, []);

  const handleClearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem("textHistory");
    toast.success("履歴をクリアしました");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            文字数カウント Pro
          </h1>
          <p className="text-muted-foreground">
            リアルタイム分析＆SNSチェック機能付き
          </p>
        </header>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Text Input */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2 p-6 shadow-elegant transition-all hover:shadow-soft">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">
                  テキスト入力
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownload}
                    disabled={!text}
                    className="transition-all hover:scale-105"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    保存
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    disabled={!text}
                    className="transition-all hover:scale-105"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    コピー
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleClear}
                    disabled={!text}
                    className="transition-all hover:scale-105"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    クリア
                  </Button>
                </div>
              </div>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="ここにテキストを入力してください..."
                className="min-h-[400px] resize-none text-base leading-relaxed transition-all focus:shadow-soft"
              />
            </Card>

            {/* Basic Stats */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Card className="border-2 p-4 shadow-soft transition-all hover:scale-105 hover:shadow-elegant">
                <div className="text-center">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">
                    文字数
                  </p>
                  <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-bold text-transparent">
                    {stats.characters.toLocaleString()}
                  </p>
                </div>
              </Card>

              <Card className="border-2 p-4 shadow-soft transition-all hover:scale-105 hover:shadow-elegant">
                <div className="text-center">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">
                    空白除く
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {stats.charactersNoSpaces.toLocaleString()}
                  </p>
                </div>
              </Card>

              <Card className="border-2 p-4 shadow-soft transition-all hover:scale-105 hover:shadow-elegant">
                <div className="text-center">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">
                    行数
                  </p>
                  <p className="text-3xl font-bold text-accent">
                    {stats.lines.toLocaleString()}
                  </p>
                </div>
              </Card>

              <Card className="border-2 p-4 shadow-soft transition-all hover:scale-105 hover:shadow-elegant">
                <div className="text-center">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">
                    バイト数
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    {stats.bytes.toLocaleString()}
                  </p>
                </div>
              </Card>
            </div>

            {/* Character Analysis */}
            <CharacterAnalysis text={text} />

            {/* Ad Space - Horizontal */}
            <AdSpace slot="horizontal" className="my-6" />

            {/* Social Media Checker */}
            <SocialMediaChecker text={text} />
          </div>

          {/* Right Column - Advanced Features */}
          <div className="space-y-6">
            {/* Goal Setter */}
            <GoalSetter text={text} goal={goal} setGoal={setGoal} />

            {/* Readability Score */}
            <ReadabilityScore text={text} />

            {/* Ad Space - Vertical */}
            <AdSpace slot="square" className="my-6" />

            {/* Text History */}
            <TextHistory
              history={history}
              onRestore={handleRestoreFromHistory}
              onClearHistory={handleClearHistory}
            />
            
            {/* Ad Space - Below History */}
            <AdSpace slot="horizontal" className="mt-6" />
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-12 pb-8 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            入力したテキストはブラウザ内でのみ処理され、サーバーに送信されることはありません
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link 
              to="/privacy" 
              className="transition-colors hover:text-primary hover:underline"
            >
              プライバシーポリシー
            </Link>
            <span>•</span>
            <Link 
              to="/cookie-policy" 
              className="transition-colors hover:text-primary hover:underline"
            >
              Cookieポリシー
            </Link>
            <span>•</span>
            <Link 
              to="/terms" 
              className="transition-colors hover:text-primary hover:underline"
            >
              利用規約
            </Link>
            <span>•</span>
            <Link 
              to="/legal" 
              className="transition-colors hover:text-primary hover:underline"
            >
              法的情報
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 文字数カウント Pro. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
